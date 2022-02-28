import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import {
  bourseCategorySelect,
  bourse_select_category_reducer,
} from "./redux/bourse/select_categories";
import {
  bourseMainGroupSelect,
  bourse_select_mainGroup_reducer,
} from "./redux/bourse/select_main_groups";
import {
  bourseSubCategorySelect,
  bourse_select_subCategory_reducer,
} from "./redux/bourse/subCategory";
import {
  bourseInstrumentsSelect,
  bourse_select_instruments_reducer,
} from "./redux/bourse/select_instruments";
import {
  bourse_select_producer_reducer,
  selectProducer,
} from "./redux/bourse/select_producer";
import {
  bourseInstrumentsSelectPdf,
  bourse_select_instruments_pdf_reducer,
} from "./redux/bourse/select_instruments_pdf";
import { newsSelect, news_select_reducer } from "./redux/news/select_news";
import {
  news_select_Attachment_reducer,
  newsSelectAttachment,
} from "./redux/news/news_attachment_select/index";
import {
  accounts_select_reducer,
  accountsSelect,
} from "./redux/accounts/select_acounts/index";
import { ShoabSelect , Shoab_select_reducer } from "./redux/shoab/select_shoab";

export const Reducers = combineReducers({
  bourse_select_mainGroup_reducer,
  bourse_select_category_reducer,
  bourse_select_subCategory_reducer,
  bourse_select_instruments_reducer,
  bourse_select_producer_reducer,
  bourse_select_instruments_pdf_reducer,
  news_select_reducer,
  news_select_Attachment_reducer,
  accounts_select_reducer,
  Shoab_select_reducer

});

export default function* rootSaga() {
  yield all([
    bourseMainGroupSelect(),
    bourseCategorySelect(),
    bourseSubCategorySelect(),
    bourseInstrumentsSelect(),
    selectProducer(),
    bourseInstrumentsSelectPdf(),
    newsSelect(),
    newsSelectAttachment(),
    accountsSelect() , 
    ShoabSelect()
  ]);
}
