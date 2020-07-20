//import Vue from "vue";
// // 通过Vue.observable创建一个可响应的对象
// export const store = createApp.observable({
//   searchData: "",
//   resultData: [],
// });

// // 定义 mutations, 修改属性
// export const mutations = {
//   setsearchData(searchInfo) {
//     store.searchData = searchInfo;
//   },
//   setresultData(resultInfo) {
//     store.resultData = [...resultInfo];
//   },
// };
// import { provide, inject, computed, ref, Ref } from "vue";
// import { Book, Books } from "@/types";

// type BookContext = {
//   books: Ref<Books>;
//   setBooks: (value: Books) => void;
//   finishedBooks: Ref<Books>;
//   addFinishedBooks: (book: Book) => void;
//   booksAvailable: Ref<Books>;
// };
import { provide, inject, computed, ref, Ref } from "vue";
const sourceDataSymbol = Symbol();
export const usesourceDataProvide = () => {
  const searchData = ref("");
  const resultData = ref([]);
  const setsearchData = (searchInfo) => {
    searchData = searchInfo;
  };
  const setresultData = (resultInfo) => {
    resultData = [...resultInfo];
  };
  provide(sourceDataSymbol, {
    sourceData,
    resultData,
    setsearchData,
    setresultData,
  });
};

export const usesourceDataInject = () => {
  const globalsourceData = inject(sourceDataSymbol);

  if (!globalsourceData) {
    throw new Error(`useBookListInject must be used after useBookListProvide`);
  }

  return globalsourceData;
};
// export const useBookListProvide = () => {
//   // 待完成图书
//   const books = ref<Books>([]);
//   const setBooks = (value: Books) => (books.value = value);

//   // 已完成图书
//   const finishedBooks = ref<Books>([]);
//   const addFinishedBooks = (book: Book) => {
//     if (!finishedBooks.value.find(({ id }) => id === book.id)) {
//       finishedBooks.value.push(book);
//     }
//   };
//   const removeFinishedBooks = (book: Book) => {
//     const removeIndex = finishedBooks.value.findIndex(({ id }) => id === book.id);
//     if (removeIndex !== -1) {
//       finishedBooks.value.splice(removeIndex, 1);
//     }
//   };

//   // 可选图书
//   const booksAvailable = computed(() => {
//     return books.value.filter(book => !finishedBooks.value.find(({ id }) => id === book.id));
//   });

//   provide(BookSymbol, {
//     books,
//     setBooks,
//     finishedBooks,
//     addFinishedBooks,
//     removeFinishedBooks,
//     booksAvailable,
//   });
// };

// export const useBookListInject = () => {
//   const booksContext = inject<BookContext>(BookSymbol);

//   if (!booksContext) {
//     throw new Error(`useBookListInject must be used after useBookListProvide`);
//   }

//   return booksContext;
// };
