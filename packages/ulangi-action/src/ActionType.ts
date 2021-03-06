/*
 * Copyright (c) Minh Loi.
 *
 * This file is part of Ulangi which is released under GPL v3.0.
 * See LICENSE or go to https://www.gnu.org/licenses/gpl-3.0.txt
 */

export enum ActionType {
  APP__INITIALIZE = 'APP__INITIALIZE',
  APP__INITIALIZING = 'APP__INITIALIZING',
  APP__INITIALIZE_SUCCEEDED = 'APP__INITIALIZE_SUCCEEDED',
  APP__INITIALIZE_FAILED = 'APP__INITIALIZE_FAILED',
  APP__ALREADY_INITIALIZED = 'APP__ALREADY_INITIALIZED',

  DATA_SHARING__ENABLE_ANALYTICS = 'DATA_SHARING__ENABLE_ANALYTICS',
  DATA_SHARING__ENABLING_ANALYTICS = 'DATA_SHARING__ENABLING_ANALYTICS',
  DATA_SHARING__ENABLE_ANALYTICS_SUCCEEDED = 'DATA_SHARING__ENABLE_ANALYTICS_SUCCEEDED',
  DATA_SHARING__ENABLE_ANALYTICS_FAILED = 'DATA_SHARING__ENABLE_ANALYTICS_FAILED',
  DATA_SHARING__DISABLE_ANALYTICS = 'DATA_SHARING__DISABLE_ANALYTICS',
  DATA_SHARING__DISABLING_ANALYTICS = 'DATA_SHARING__DISABLING_ANALYTICS',
  DATA_SHARING__DISABLE_ANALYTICS_SUCCEEDED = 'DATA_SHARING__DISABLE_ANALYTICS_SUCCEEDED',
  DATA_SHARING__DISABLE_ANALYTICS_FAILED = 'DATA_SHARING__DISABLE_ANALYTICS_FAILED',

  IAP__INIT = 'IAP__INIT',
  IAP__INITING = 'IAP__INITING',
  IAP__INIT_SUCCEEDED = 'IAP__INIT_SUCCEEDED',
  IAP__INIT_FAILED = 'IAP__INIT_FAILED',
  IAP__GET_PRODUCTS = 'IAP__GET_PRODUCTS',
  IAP__GETTING_PRODUCTS = 'IAP__GETTING_PRODUCTS',
  IAP__GET_PRODUCTS_SUCCEEDED = 'IAP__GET_PRODUCTS_SUCCEEDED',
  IAP__GET_PRODUCTS_FAILED = 'IAP__GET_PRODUCTS_FAILED',
  IAP__REQUEST_PURCHASE = 'IAP__REQUEST_PURCHASE',
  IAP__REQUESTING_PURCHASE = 'IAP__REQUESTING_PURCHASE',
  IAP__REQUEST_PURCHASE_SUCCEEDED = 'IAP__REQUEST_PURCHASE_SUCCEEDED',
  IAP__REQUEST_PURCHASE_FAILED = 'IAP__REQUEST_PURCHASE_FAILED',
  IAP__RESTORE_PURCHASES = 'IAP__RESTORE_PURCHASES',
  IAP__RESTORING_PURCHASES = 'IAP__RESTORING_PURCHASES',
  IAP__RESTORE_PURCHASES_SUCCEEDED = 'IAP__RESTORE_PURCHASES_SUCCEEDED',
  IAP__RESTORE_PURCHASES_FAILED = 'IAP__RESTORE_PURCHASES_FAILED',
  IAP__PROCESSING_PURCHASE = 'IAP__PROCESSING_PURCHASE',
  IAP__PROCESS_PURCHASE_SUCCEEDED = 'IAP__PROCESS_PURCHASE_SUCCEEDED',
  IAP__PROCESS_PURCHASE_FAILED = 'IAP__PROCESS_PURCHASE_FAILED',

  AD__SET_UP = 'AD__SET_UP',
  AD__SET_UP_SUCCEEDED = 'AD__SET_UP_SUCCEEDED',
  AD__SET_UP_FAILED = 'AD__SET_UP_FAILED',
  AD__INITIALIZE = 'AD__INITIALIZE',
  AD__INITIALIZE_SUCCEEDED = 'AD__INITIALIZE_SUCCEEDED',
  AD__INITIALIZE_FAILED = 'AD__INITIALIZE_FAILED',
  AD__GET_CONSENT_STATUS_SUCCEEDED = 'AD__GET_CONSENT_STATUS_SUCCEEDED',
  AD__GET_REQUEST_LOCATION_SUCCEEDED = 'AD__GET_REQUEST_LOCATION_SUCCEEDED',
  AD__CONSENT_STATUS_CHANGED = 'AD__CONSENT_STATUS_CHANGED',
  AD__SHOW_GOOGLE_CONSENT_FORM = 'AD__SHOW_GOOGLE_CONSENT_FORM',
  AD__SHOW_GOOGLE_CONSENT_FORM_FAILED = 'AD__SHOW_GOOGLE_CONSENT_FORM_FAILED',
  AD__LOAD_AD = 'AD__LOAD_AD',
  AD__LOADING_AD = 'AD__LOADING_AD',
  AD__LOAD_AD_SUCCEEDED = 'AD__LOAD_AD_SUCCEEDED',
  AD__LOAD_AD_FAILED = 'AD__LOAD_AD_FAILED',
  AD__SHOW_AD = 'AD__SHOW_AD',
  AD__SHOWING_AD = 'AD__SHOWING_AD',
  AD__SHOW_AD_SUCCEEDED = 'AD__SHOW_AD_SUCCEEDED',
  AD__SHOW_AD_FAILED = 'AD__SHOW_AD_FAILED',
  AD__AD_OPENED = 'AD__AD_OPENED',
  AD__AD_CLOSED = 'AD__AD_CLOSED',
  AD__CLEAR_AD = 'AD__CLEAR_AD',

  API_KEY__GET_API_KEY = 'API_KEY__GET_API_KEY',
  API_KEY__GETTING_API_KEY = 'API_KEY__GETTING_API_KEY',
  API_KEY__GET_API_KEY_SUCCEEDED = 'API_KEY__GET_API_KEY_SUCCEEDED',
  API_KEY__GET_API_KEY_FAILED = 'API_KEY__GET_API_KEY_FAILED',
  API_KEY__DELETE_API_KEY = 'API_KEY__DELETE_API_KEY',
  API_KEY__DELETING_API_KEY = 'API_KEY__DELETING_API_KEY',
  API_KEY__DELETE_API_KEY_SUCCEEDED = 'API_KEY__DELETE_API_KEY_SUCCEEDED',
  API_KEY__DELETE_API_KEY_FAILED = 'API_KEY__DELETE_API_KEY_FAILED',
  API_KEY__SEND_API_KEY = 'API_KEY__SEND_API_KEY',
  API_KEY__SENDING_API_KEY = 'API_KEY__SENDING_API_KEY',
  API_KEY__SEND_API_KEY_SUCCEEDED = 'API_KEY__SEND_API_KEY_SUCCEEDED',
  API_KEY__SEND_API_KEY_FAILED = 'API_KEY__SEND_API_KEY_FAILED',

  ATOM__PREPARE_FETCH_VOCABULARY = 'ATOM__PREPARE_FETCH_VOCABULARY',
  ATOM__PREPARING_FETCH_VOCABULARY = 'ATOM__PREPARING_FETCH_VOCABULARY',
  ATOM__PREPARE_FETCH_VOCABULARY_SUCCEEDED = 'ATOM__PREPARE_FETCH_VOCABULARY_SUCCEEDED',
  ATOM__PREPARE_FETCH_VOCABULARY_FAILED = 'ATOM__PREPARE_FETCH_VOCABULARY_FAILED',
  ATOM__FETCH_VOCABULARY = 'ATOM__FETCH_VOCABULARY',
  ATOM__FETCHING_VOCABULARY = 'ATOM__FETCHING_VOCABULARY',
  ATOM__FETCH_VOCABULARY_SUCCEEDED = 'ATOM__FETCH_VOCABULARY_SUCCEEDED',
  ATOM__FETCH_VOCABULARY_FAILED = 'ATOM__FETCH_VOCABULARY_FAILED',
  ATOM__CLEAR_FETCH_VOCABULARY = 'ATOM__CLEAR_FETCH_VOCABULARY',

  AUDIO__SYNTHESIZE_SPEECH = 'AUDIO__SYNTHESIZE_SPEECH',
  AUDIO__SYNTHESIZING_SPEECH = 'AUDIO__SYNTHESIZING_SPEECH',
  AUDIO__SYNTHESIZE_SPEECH_SUCCEEDED = 'AUDIO__SYNTHESIZE_SPEECH_SUCCEEDED',
  AUDIO__SYNTHESIZE_SPEECH_FAILED = 'AUDIO__SYNTHESIZE_SPEECH_FAILED',
  AUDIO__CLEAR_SYNTHESIZED_SPEECH_CACHE = 'AUDIO__CLEAR_SYNTHESIZED_SPEECH_CACHE',
  AUDIO__CLEARING_SYNTHESIZED_SPEECH_CACHE = 'AUDIO__CLEARING_SYNTHESIZED_SPEECH_CACHE',
  AUDIO__CLEAR_SYNTHESIZED_SPEECH_CACHE_SUCCEEDED = 'AUDIO__CLEAR_SYNTHESIZED_SPEECH_CACHE_SUCCEEDED',
  AUDIO__CLEAR_SYNTHESIZED_SPEECH_CACHE_FAILED = 'AUDIO__CLEAR_SYNTHESIZED_SPEECH_CACHE_FAILED',
  AUDIO__PLAY = 'AUDIO__PLAY',
  AUDIO__PLAYING = 'AUDIO__PLAYING',
  AUDIO__PLAY_SUCCEEDED = 'AUDIO__PLAY_SUCCEEDED',
  AUDIO__PLAY_FAILED = 'AUDIO__PLAY_FAILED',

  CATEGORY__PREPARE_FETCH_SUGGESTIONS = 'CATEGORY__PREPARE_FETCH_SUGGESTIONS',
  CATEGORY__PREPARING_FETCH_SUGGESTIONS = 'CATEGORY__PREPARING_FETCH_SUGGESTIONS',
  CATEGORY__PREPARE_FETCH_SUGGESTIONS_SUCCEEDED = 'CATEGORY__PREPARE_FETCH_SUGGESTIONS_SUCCEEDED',
  CATEGORY__PREPARE_FETCH_SUGGESTIONS_FAILED = 'CATEGORY__PREPARE_FETCH_SUGGESTIONS_FAILED',
  CATEGORY__FETCH_SUGGESTIONS = 'CATEGORY__FETCH_SUGGESTIONS',
  CATEGORY__FETCHING_SUGGESTIONS = 'CATEGORY__FETCHING_SUGGESTIONS',
  CATEGORY__FETCH_SUGGESTIONS_SUCCEEDED = 'CATEGORY__FETCH_SUGGESTIONS_SUCCEEDED',
  CATEGORY__FETCH_SUGGESTIONS_FAILED = 'CATEGORY__FETCH_SUGGESTIONS_FAILED',
  CATEGORY__CLEAR_FETCH_SUGGESTIONS = 'CATEGORY__CLEAR_FETCH_SUGGESTIONS',

  DATABASE__CONNECT_SHARED_DB = 'DATABASE__CONNECT_SHARED_DB',
  DATABASE__CONNECTING_SHARED_DB = 'DATABASE__CONNECTING_SHARED_DB',
  DATABASE__CONNECT_SHARED_DB_SUCCEEDED = 'DATABASE__CONNECT_SHARED_DB_SUCCEEDED',
  DATABASE__CONNECT_SHARED_DB_FAILED = 'DATABASE__CONNECT_SHARED_DB_FAILED',
  DATABASE__ALREADY_CONNECTED_SHARED_DB = 'DATABASE__ALREADY_CONNECTED_SHARED_DB',
  DATABASE__CHECK_SHARED_DB = 'DATABASE__CHECK_SHARED_DB',
  DATABASE__CHECKING_SHARED_DB = 'DATABASE__CHECKING_SHARED_DB',
  DATABASE__CHECK_SHARED_DB_SUCCEEDED = 'DATABASE__CHECK_SHARED_DB_SUCCEEDED',
  DATABASE__CHECK_SHARED_DB_FAILED = 'DATABASE__CHECK_SHARED_DB_FAILED',
  DATABASE__ALREADY_CHECKED_SHARED_DB = 'DATABASE__ALREADY_CHECKED_SHARED_DB',
  DATABASE__CONNECT_USER_DB = 'DATABASE__CONNECT_USER_DB',
  DATABASE__CONNECTING_USER_DB = 'DATABASE__CONNECTING_USER_DB',
  DATABASE__CONNECT_USER_DB_SUCCEEDED = 'DATABASE__CONNECT_USER_DB_SUCCEEDED',
  DATABASE__CONNECT_USER_DB_FAILED = 'DATABASE__CONNECT_USER_DB_FAILED',
  DATABASE__CHECK_USER_DB = 'DATABASE__CHECK_USER_DB',
  DATABASE__CHECKING_USER_DB = 'DATABASE__CHECKING_USER_DB',
  DATABASE__CHECK_USER_DB_TIMEOUT_EXCEEDED = 'DATABASE__CHECK_USER_DB_TIMEOUT_EXCEEDED',
  DATABASE__CHECK_USER_DB_SUCCEEDED = 'DATABASE__CHECK_USER_DB_SUCCEEDED',
  DATABASE__CHECK_USER_DB_FAILED = 'DATABASE__CHECK_USER_DB_FAILED',

  DICTIONARY__CLEAR_ENTRY = 'DICTIONARY__CLEAR_ENTRY',
  DICTIONARY__GET_ENTRY = 'DICTIONARY__GET_ENTRY',
  DICTIONARY__GETTING_ENTRY = 'DICTIONARY__GETTING_ENTRY',
  DICTIONARY__GET_ENTRY_SUCCEEDED = 'DICTIONARY__GET_ENTRY_SUCCEEDED',
  DICTIONARY__GET_ENTRY_FAILED = 'DICTIONARY__GET_ENTRY_FAILED',

  LIBRARY__PREPARE_SEARCH_PUBLIC_VOCABULARY = 'LIBRARY__PREPARE_SEARCH_PUBLIC_VOCABULARY',
  LIBRARY__PREPARING_SEARCH_PUBLIC_VOCABULARY = 'LIBRARY__PREPARING_SEARCH_PUBLIC_VOCABULARY',
  LIBRARY__PREPARE_SEARCH_PUBLIC_VOCABULARY_SUCCEEDED = 'LIBRARY__PREPARE_SEARCH_PUBLIC_VOCABULARY_SUCCEEDED',
  LIBRARY__PREPARE_SEARCH_PUBLIC_VOCABULARY_FAILED = 'LIBRARY__PREPARE_SEARCH_PUBLIC_VOCABULARY_FAILED',
  LIBRARY__SEARCH_PUBLIC_VOCABULARY = 'LIBRARY__SEARCH_PUBLIC_VOCABULARY',
  LIBRARY__SEARCHING_PUBLIC_VOCABULARY = 'LIBRARY__SEARCHING_PUBLIC_VOCABULARY',
  LIBRARY__SEARCH_PUBLIC_VOCABULARY_SUCCEEDED = 'LIBRARY__SEARCH_PUBLIC_VOCABULARY_SUCCEEDED',
  LIBRARY__SEARCH_PUBLIC_VOCABULARY_FAILED = 'LIBRARY__SEARCH_PUBLIC_VOCABULARY_FAILED',
  LIBRARY__CLEAR_SEARCH_PUBLIC_VOCABULARY = 'LIBRARY__CLEAR_SEARCH_PUBLIC_VOCABULARY',
  LIBRARY__PREPARE_SEARCH_PUBLIC_SETS = 'LIBRARY__PREPARE_SEARCH_PUBLIC_SETS',
  LIBRARY__PREPARING_SEARCH_PUBLIC_SETS = 'LIBRARY__PREPARING_SEARCH_PUBLIC_SETS',
  LIBRARY__PREPARE_SEARCH_PUBLIC_SETS_SUCCEEDED = 'LIBRARY__PREPARE_SEARCH_PUBLIC_SETS_SUCCEEDED',
  LIBRARY__PREPARE_SEARCH_PUBLIC_SETS_FAILED = 'LIBRARY__PREPARE_SEARCH_PUBLIC_SETS_FAILED',
  LIBRARY__SEARCH_PUBLIC_SETS = 'LIBRARY__SEARCH_PUBLIC_SETS',
  LIBRARY__SEARCHING_PUBLIC_SETS = 'LIBRARY__SEARCHING_PUBLIC_SETS',
  LIBRARY__SEARCH_PUBLIC_SETS_SUCCEEDED = 'LIBRARY__SEARCH_PUBLIC_SETS_SUCCEEDED',
  LIBRARY__SEARCH_PUBLIC_SETS_FAILED = 'LIBRARY__SEARCH_PUBLIC_SETS_FAILED',
  LIBRARY__CLEAR_SEARCH_PUBLIC_SETS = 'LIBRARY__CLEAR_SEARCH_PUBLIC_SETS',
  LIBRARY__GET_PUBLIC_SET_COUNT = 'LIBRARY__GET_PUBLIC_SET_COUNT',
  LIBRARY__GETTING_PUBLIC_SET_COUNT = 'LIBRARY__GETTING_PUBLIC_SET_COUNT',
  LIBRARY__GET_PUBLIC_SET_COUNT_SUCCEEDED = 'LIBRARY__GET_PUBLIC_SET_COUNT_SUCCEEDED',
  LIBRARY__GET_PUBLIC_SET_COUNT_FAILED = 'LIBRARY__GET_PUBLIC_SET_COUNT_FAILED',

  MANAGE__PREPARE_FETCH_VOCABULARY = 'MANAGE__PREPARE_FETCH_VOCABULARY',
  MANAGE__PREPARING_FETCH_VOCABULARY = 'MANAGE__PREPARING_FETCH_VOCABULARY',
  MANAGE__PREPARE_FETCH_VOCABULARY_SUCCEEDED = 'MANAGE__PREPARE_FETCH_VOCABULARY_SUCCEEDED',
  MANAGE__PREPARE_FETCH_VOCABULARY_FAILED = 'MANAGE__PREPARE_FETCH_VOCABULARY_FAILED',
  MANAGE__FETCH_VOCABULARY = 'MANAGE__FETCH_VOCABULARY',
  MANAGE__FETCHING_VOCABULARY = 'MANAGE__FETCHING_VOCABULARY',
  MANAGE__FETCH_VOCABULARY_SUCCEEDED = 'MANAGE__FETCH_VOCABULARY_SUCCEEDED',
  MANAGE__FETCH_VOCABULARY_FAILED = 'MANAGE__FETCH_VOCABULARY_FAILED',
  MANAGE__CLEAR_FETCH_VOCABULARY = 'MANAGE__CLEAR_FETCH_VOCABULARY',
  MANAGE__PREPARE_FETCH_CATEGORY = 'MANAGE__PREPARE_FETCH_CATEGORY',
  MANAGE__PREPARING_FETCH_CATEGORY = 'MANAGE__PREPARING_FETCH_CATEGORY',
  MANAGE__PREPARE_FETCH_CATEGORY_SUCCEEDED = 'MANAGE__PREPARE_FETCH_CATEGORY_SUCCEEDED',
  MANAGE__PREPARE_FETCH_CATEGORY_FAILED = 'MANAGE__PREPARE_FETCH_CATEGORY_FAILED',
  MANAGE__FETCH_CATEGORY = 'MANAGE__FETCH_CATEGORY',
  MANAGE__FETCHING_CATEGORY = 'MANAGE__FETCHING_CATEGORY',
  MANAGE__FETCH_CATEGORY_SUCCEEDED = 'MANAGE__FETCH_CATEGORY_SUCCEEDED',
  MANAGE__FETCH_CATEGORY_FAILED = 'MANAGE__FETCH_CATEGORY_FAILED',
  MANAGE__CLEAR_FETCH_CATEGORY = 'MANAGE__CLEAR_FETCH_CATEGORY',

  NETWORK__CHECK_CONNECTION = 'NETWORK__CHECK_CONNECTION',
  NETWORK__CHECKING_CONNECTION = 'NETWORK__CHECKING_CONNECTION',
  NETWORK__CHECK_CONNECTION_SUCCEEDED = 'NETWORK__CHECK_CONNECTION_SUCCEEDED',
  NETWORK__CHECK_CONNECTION_FAILED = 'NETWORK__CHECK_CONNECTION_FAILED',
  NETWORK__OBSERVE_CONNECTION_CHANGE = 'NETWORK__OBSERVE_CONNECTION_CHANGE',
  NETWORK__OBSERVING_CONNECTION_CHANGE = 'NETWORK__OBSERVING_CONNECTION_CHANGE',
  NETWORK__OBSERVE_CONNECTION_CHANGE_FAILED = 'NETWORK__OBSERVE_CONNECTION_CHANGE_FAILED',
  NETWORK__CANCEL_OBSERVING_CONNECTION_CHANGE = 'NETWORK__CANCEL_OBSERVING_CONNECTION_CHANGE',
  NETWORK__CONNECTION_CHANGED = 'NETWORK__CONNECTION_CHANGED',

  QUIZ__FETCH_VOCABULARY_FOR_WRITING = 'QUIZ__FETCH_VOCABULARY_FOR_WRITING',
  QUIZ__FETCHING_VOCABULARY_FOR_WRITING = 'QUIZ__FETCHING_VOCABULARY_FOR_WRITING',
  QUIZ__FETCH_VOCABULARY_FOR_WRITING_SUCCEEDED = 'QUIZ__FETCH_VOCABULARY_FOR_WRITING_SUCCEEDED',
  QUIZ__FETCH_VOCABULARY_FOR_WRITING_FAILED = 'QUIZ__FETCH_VOCABULARY_FOR_WRITING_FAILED',
  QUIZ__FETCH_VOCABULARY_FOR_MULTIPLE_CHOICE = 'QUIZ__FETCH_VOCABULARY_FOR_MULTIPLE_CHOICE',
  QUIZ__FETCHING_VOCABULARY_FOR_MULTIPLE_CHOICE = 'QUIZ__FETCHING_VOCABULARY_FOR_MULTIPLE_CHOICE',
  QUIZ__FETCH_VOCABULARY_FOR_MULTIPLE_CHOICE_SUCCEEDED = 'QUIZ__FETCH_VOCABULARY_FOR_MULTIPLE_CHOICE_SUCCEEDED',
  QUIZ__FETCH_VOCABULARY_FOR_MULTIPLE_CHOICE_FAILED = 'QUIZ__FETCH_VOCABULARY_FOR_MULTIPLE_CHOICE_FAILED',

  REFLEX__PREPARE_FETCH_VOCABULARY = 'REFLEX__PREPARE_FETCH_VOCABULARY',
  REFLEX__PREPARING_FETCH_VOCABULARY = 'REFLEX__PREPARING_FETCH_VOCABULARY',
  REFLEX__PREPARE_FETCH_VOCABULARY_SUCCEEDED = 'REFLEX__PREPARE_FETCH_VOCABULARY_SUCCEEDED',
  REFLEX__PREPARE_FETCH_VOCABULARY_FAILED = 'REFLEX__PREPARE_FETCH_VOCABULARY_FAILED',
  REFLEX__FETCH_VOCABULARY = 'REFLEX__FETCH_VOCABULARY',
  REFLEX__FETCHING_VOCABULARY = 'REFLEX__FETCHING_VOCABULARY',
  REFLEX__FETCH_VOCABULARY_SUCCEEDED = 'REFLEX__FETCH_VOCABULARY_SUCCEEDED',
  REFLEX__FETCH_VOCABULARY_FAILED = 'REFLEX__FETCH_VOCABULARY_FAILED',
  REFLEX__CLEAR_FETCH_VOCABULARY = 'REFLEX__CLEAR_FETCH_VOCABULARY',

  REMOTE_CONFIG__FETCH = 'REMOTE_CONFIG__FETCH',
  REMOTE_CONFIG__FETCHING = 'REMOTE_CONFIG__FETCHING',
  REMOTE_CONFIG__FETCH_SUCCEEDED = 'REMOTE_CONFIG__FETCH_SUCCEEDED',
  REMOTE_CONFIG__FETCH_FAILED = 'REMOTE_CONFIG__FETCH_FAILED',

  REMOTE_CONFIG__UPDATE = 'REMOTE_CONFIG__UPDATE',
  REMOTE_CONFIG__UPDATING = 'REMOTE_CONFIG__UPDATE',
  REMOTE_CONFIG__UPDATE_SUCCEEDED = 'REMOTE_CONFIG__UPDATE_SUCCEEDED',
  REMOTE_CONFIG__UPDATE_FAILED = 'REMOTE_CONFIG__UPDATE_FAILED',

  ROOT__FORK_PROTECTED_SAGAS = 'ROOT__FORK_PROTECTED_SAGAS',
  ROOT__FORKING_PROTECTED_SAGAS = 'ROOT__FORKING_PROTECTED_SAGAS',
  ROOT__FORK_PROTECTED_SAGAS_SUCCEEDED = 'ROOT__FORK_PROTECTED_SAGAS_SUCCEEDED',
  ROOT__FORK_PROTECTED_SAGAS_FAILED = 'ROOT__FORK_PROTECTED_SAGAS_FAILED',
  ROOT__CANCEL_PROTECTED_SAGAS = 'ROOT__CANCEL_PROTECTED_SAGAS',
  ROOT__CANCELLING_PROTECTED_SAGAS = 'ROOT__CANCELLING_PROTECTED_SAGAS',
  ROOT__CANCEL_PROTECTED_SAGAS_SUCCEEDED = 'ROOT__CANCEL_PROTECTED_SAGAS_SUCCEEDED',
  ROOT__CANCEL_PROTECTED_SAGAS_FAILED = 'ROOT__CANCEL_PROTECTED_SAGAS_FAILED',

  SEARCH__PREPARE_SEARCH = 'SEARCH__PREPARE_SEARCH',
  SEARCH__PREPARING_SEARCH = 'SEARCH__PREPARING_SEARCH',
  SEARCH__PREPARE_SEARCH_SUCCEEDED = 'SEARCH__PREPARE_SEARCH_SUCCEEDED',
  SEARCH__PREPARE_SEARCH_FAILED = 'SEARCH__PREPARE_SEARCH_FAILED',
  SEARCH__SEARCH = 'SEARCH__SEARCH',
  SEARCH__SEARCHING = 'SEARCH__SEARCHING',
  SEARCH__SEARCH_SUCCEEDED = 'SEARCH__SEARCH_SUCCEEDED',
  SEARCH__SEARCH_FAILED = 'SEARCH__SEARCH_FAILED',
  SEARCH__CLEAR_SEARCH = 'SEARCH__CLEAR_SEARCH',
  SEARCH__RESET = 'SEARCH__RESET',

  SET__ADD = 'SET__ADD',
  SET__ADDING = 'SET__ADDING',
  SET__ADD_SUCCEEDED = 'SET__ADD_SUCCEEDED',
  SET__ADD_FAILED = 'SET__ADD_FAILED',
  SET__EDIT = 'SET__EDIT',
  SET__EDITING = 'SET__EDITING',
  SET__EDIT_SUCCEEDED = 'SET__EDIT_SUCCEEDED',
  SET__EDIT_FAILED = 'SET__EDIT_FAILED',
  SET__FETCH_ALL = 'SET__FETCH_ALL',
  SET__FETCHING_ALL = 'SET__FETCHING_ALL',
  SET__FETCH_ALL_SUCCEEDED = 'SET__FETCH_ALL_SUCCEEDED',
  SET__FETCH_ALL_FAILED = 'SET__FETCH_ALL_FAILED',
  SET__FETCH = 'SET__FETCH',
  SET__FETCHING = 'SET__FETCHING',
  SET__FETCH_SUCCEEDED = 'SET__FETCH_SUCCEEDED',
  SET__FETCH_FAILED = 'SET__FETCH_FAILED',
  SET__SELECT = 'SET__SELECT',
  SET__UPLOADING_SETS = 'SET__UPLOADING_SETS',
  SET__UPLOAD_SETS_SUCCEEDED = 'SET__UPLOAD_SETS_SUCCEEDED',
  SET__UPLOAD_SETS_FAILED = 'SET__UPLOAD_SETS_FAILED',
  SET__DOWNLOADING_SETS = 'SET__DOWNLOADING_SETS',
  SET__DOWNLOAD_SETS_SUCCEEDED = 'SET__DOWNLOAD_SETS_SUCCEEDED',
  SET__DOWNLOAD_SETS_FAILED = 'SET__DOWNLOAD_SETS_FAILED',
  SET__DOWNLOADING_INCOMPATIBLE_SETS = 'SET__DOWNLOADING_INCOMPATIBLE_SETS',
  SET__DOWNLOAD_INCOMPATIBLE_SETS_SUCCEEDED = 'SET__DOWNLOAD_INCOMPATIBLE_SETS_SUCCEEDED',
  SET__DOWNLOAD_INCOMPATIBLE_SETS_FAILED = 'SET__DOWNLOAD_INCOMPATIBLE_SETS_FAILED',

  SPACED_REPETITION__FETCH_VOCABULARY = 'SPACED_REPETITION__FETCH_VOCABULARY',
  SPACED_REPETITION__FETCHING_VOCABULARY = 'SPACED_REPETITION__FETCHING_VOCABULARY',
  SPACED_REPETITION__FETCH_VOCABULARY_SUCCEEDED = 'SPACED_REPETITION__FETCH_VOCABULARY_SUCCEEDED',
  SPACED_REPETITION__FETCH_VOCABULARY_FAILED = 'SPACED_REPETITION__FETCH_VOCABULARY_FAILED',
  SPACED_REPETITION__SAVE_RESULT = 'SPACED_REPETITION__SAVE_RESULT',
  SPACED_REPETITION__SAVING_RESULT = 'SPACED_REPETITION__SAVING_RESULT',
  SPACED_REPETITION__SAVE_RESULT_SUCCEEDED = 'SPACED_REPETITION__SAVE_RESULT_SUCCEEDED',
  SPACED_REPETITION__SAVE_RESULT_FAILED = 'SPACED_REPETITION__SAVE_RESULT_FAILED',
  SPACED_REPETITION__CLEAR_LESSON = 'SPACED_REPETITION__CLEAR_LESSON',

  SYNC__OBSERVE_LOCAL_UPDATES_FOR_SYNCING = 'SYNC__OBSERVE_LOCAL_UPDATES_FOR_SYNCING',
  SYNC__OBSERVING_LOCAL_UPDATES_FOR_SYNCING = 'SYNC__OBSERVING_LOCAL_UPDATES_FOR_SYNCING',
  SYNC__OBSERVE_LOCAL_UPDATES_FOR_SYNCING_FAILED = 'SYNC__OBSERVE_LOCAL_UPDATES_FOR_SYNCING_FAILED',
  SYNC__OBSERVE_REMOTE_UPDATES_FOR_SYNCING = 'SYNC__OBSERVE_REMOTE_UPDATES_FOR_SYNCING',
  SYNC__OBSERVING_REMOTE_UPDATES_FOR_SYNCING = 'SYNC__OBSERVING_REMOTE_UPDATES_FOR_SYNCING',
  SYNC__OBSERVE_REMOTE_UPDATES_FOR_SYNCING_FAILED = 'SYNC__OBSERVE_REMOTE_UPDATES_FOR_SYNCING_FAILED',
  SYNC__ADD_SYNC_TASK = 'SYNC__ADD_SYNC_TASK',
  SYNC__SYNCING = 'SYNC__SYNCING',
  SYNC__SYNC_COMPLETED = 'SYNC__SYNC_COMPLETED',
  SYNC__STOP = 'SYNC__STOP',

  TRANSLATION__TRANSLATE = 'TRANSLATION__TRANSLATE',
  TRANSLATION__TRANSLATING = 'TRANSLATION__TRANSLATING',
  TRANSLATION__TRANSLATE_SUCCEEDED = 'TRANSLATION__TRANSLATE_SUCCEEDED',
  TRANSLATION__TRANSLATE_FAILED = 'TRANSLATION__TRANSLATE_FAILED',
  TRANSLATION__TRANSLATE_BIDIRECTION = 'TRANSLATION__TRANSLATE_BIDIRECTION',
  TRANSLATION__TRANSLATING_BIDIRECTION = 'TRANSLATION__TRANSLATING_BIDIRECTION',
  TRANSLATION__TRANSLATE_BIDIRECTION_SUCCEEDED = 'TRANSLATION__TRANSLATE_BIDIRECTION_SUCCEEDED',
  TRANSLATION__TRANSLATE_BIDIRECTION_FAILED = 'TRANSLATION__TRANSLATE_BIDIRECTION_FAILED',
  TRANSLATION__CLEAR_TRANSLATIONS = 'TRANSLATION__CLEAR_TRANSLATIONS',
  TRANSLATION__CLEAR_BIDIRECTIONAL_TRANSLATIONS = 'TRANSLATION__CLEAR_BIDIRECTIONAL_TRANSLATIONS',

  USER__GET_SESSION = 'USER__GET_SESSION',
  USER__GETTING_SESSION = 'USER__GETTING_SESSION',
  USER__GET_SESSION_SUCCEEDED = 'USER__GET_SESSION_SUCCEEDED',
  USER__GET_SESSION_FAILED = 'USER__GET_SESSION_FAILED',
  USER__CHECK_SESSION = 'USER__CHECK_SESSION',
  USER__CHECKING_SESSION = 'USER__CHECKING_SESSION',
  USER__CHECK_SESSION_SUCCEEDED = 'USER__CHECK_SESSION_SUCCEEDED',
  USER__CHECK_SESSION_FAILED = 'USER__CHECK_SESSION_FAILED',
  USER__AUTHENTICATED = 'USER__AUTHENTICATED',
  USER__SIGN_IN = 'USER__SIGN_IN',
  USER__SIGNING_IN = 'USER__SIGNING_IN',
  USER__SIGN_IN_SUCCEEDED = 'USER__SIGN_IN_SUCCEEDED',
  USER__SIGN_IN_FAILED = 'USER__SIGN_IN_FAILED',
  USER__SIGN_IN_AS_GUEST = 'USER__SIGN_IN_AS_GUEST',
  USER__SIGNING_IN_AS_GUEST = 'USER__SIGNING_IN_AS_GUEST',
  USER__SIGN_IN_AS_GUEST_SUCCEEDED = 'USER__SIGN_IN_AS_GUEST_SUCCEEDED',
  USER__SIGN_IN_AS_GUEST_FAILED = 'USER__SIGN_IN_AS_GUEST_FAILED',
  USER__SIGN_UP = 'USER__SIGN_UP',
  USER__SIGNING_UP = 'USER__SIGNING_UP',
  USER__SIGN_UP_SUCCEEDED = 'USER__SIGN_UP_SUCCEEDED',
  USER__SIGN_UP_FAILED = 'USER__SIGN_UP_FAILED',
  USER__SIGN_OUT = 'USER__SIGN_OUT',
  USER__SIGNING_OUT = 'USER__SIGNING_OUT',
  USER__SIGN_OUT_SUCCEEDED = 'USER__SIGN_OUT_SUCCEEDED',
  USER__SIGN_OUT_FAILED = 'USER__SIGN_OUT_FAILED',
  USER__REQUEST_PASSWORD_RESET_EMAIL = 'USER__REQUEST_PASSWORD_RESET_EMAIL',
  USER__REQUESTING_PASSWORD_RESET_EMAIL = 'USER__REQUESTING_PASSWORD_RESET_EMAIL',
  USER__REQUEST_PASSWORD_RESET_EMAIL_SUCCEEDED = 'USER__REQUEST_PASSWORD_RESET_EMAIL_SUCCEEDED',
  USER__REQUEST_PASSWORD_RESET_EMAIL_FAILED = 'USER__REQUEST_PASSWORD_RESET_EMAIL_FAILED',
  USER__CHANGE_EMAIL_AND_PASSWORD = 'USER__CHANGE_EMAIL_AND_PASSWORD',
  USER__CHANGING_EMAIL_AND_PASSWORD = 'USER__CHANGING_EMAIL_AND_PASSWORD',
  USER__CHANGE_EMAIL_AND_PASSWORD_SUCCEEDED = 'USER__CHANGE_EMAIL_AND_PASSWORD_SUCCEEDED',
  USER__CHANGE_EMAIL_AND_PASSWORD_FAILED = 'USER__CHANGE_EMAIL_AND_PASSWORD_FAILED',
  USER__CHANGE_EMAIL = 'USER__CHANGE_EMAIL',
  USER__CHANGING_EMAIL = 'USER__CHANGING_EMAIL',
  USER__CHANGE_EMAIL_SUCCEEDED = 'USER__CHANGE_EMAIL_SUCCEEDED',
  USER__CHANGE_EMAIL_FAILED = 'USER__CHANGE_EMAIL_FAILED',
  USER__CHANGE_PASSWORD = 'USER__CHANGE_PASSWORD',
  USER__CHANGING_PASSWORD = 'USER__CHANGING_PASSWORD',
  USER__CHANGE_PASSWORD_SUCCEEDED = 'USER__CHANGE_PASSWORD_SUCCEEDED',
  USER__CHANGE_PASSWORD_FAILED = 'USER__CHANGE_PASSWORD_FAILED',
  USER__EDIT = 'USER__EDIT',
  USER__EDITING = 'USER__EDITING',
  USER__EDIT_SUCCEEDED = 'USER__EDIT_SUCCEEDED',
  USER__EDIT_FAILED = 'USER__EDIT_FAILED',
  USER__FETCH = 'USER__FETCH',
  USER__FETCHING = 'USER__FETCHING',
  USER__FETCH_SUCCEEDED = 'USER__FETCH_SUCCEEDED',
  USER__FETCH_FAILED = 'USER__FETCH_FAILED',
  USER__UPLOADING_USER = 'USER__UPLOADING_USER',
  USER__UPLOAD_USER_SUCCEEDED = 'USER__UPLOAD_USER_SUCCEEDED',
  USER__UPLOAD_USER_FAILED = 'USER__UPLOAD_USER_FAILED',
  USER__DOWNLOADING_USER = 'USER__DOWNLOADING_USER',
  USER__DOWNLOAD_USER_SUCCEEDED = 'USER__DOWNLOAD_USER_SUCCEEDED',
  USER__DOWNLOAD_USER_FAILED = 'USER__DOWNLOAD_USER_FAILED',
  USER__CONTACT_ADMIN = 'USER__CONTACT_ADMIN',
  USER__CONTACTING_ADMIN = 'USER__CONTACTING_ADMIN',
  USER__CONTACT_ADMIN_SUCCEEDED = 'USER__CONTACT_ADMIN_SUCCEEDED',
  USER__CONTACT_ADMIN_FAILED = 'USER__CONTACT_ADMIN_FAILED',

  VOCABULARY__ADD = 'VOCABULARY__ADD',
  VOCABULARY__ADDING = 'VOCABULARY__ADDING',
  VOCABULARY__ADD_SUCCEEDED = 'VOCABULARY__ADD_SUCCEEDED',
  VOCABULARY__ADD_FAILED = 'VOCABULARY__ADD_FAILED',
  VOCABULARY__ADD_MULTIPLE = 'VOCABULARY__ADD_MULTIPLE',
  VOCABULARY__ADDING_MULTIPLE = 'VOCABULARY__ADDING_MULTIPLE',
  VOCABULARY__ADD_MULTIPLE_SUCCEEDED = 'VOCABULARY__ADD_MULTIPLE_SUCCEEDED',
  VOCABULARY__ADD_MULTIPLE_FAILED = 'VOCABULARY__ADD_MULTIPLE_FAILED',
  VOCABULARY__EDIT = 'VOCABULARY__EDIT',
  VOCABULARY__EDITING = 'VOCABULARY__EDITING',
  VOCABULARY__EDIT_SUCCEEDED = 'VOCABULARY__EDIT_SUCCEEDED',
  VOCABULARY__EDIT_FAILED = 'VOCABULARY__EDIT_FAILED',
  VOCABULARY__EDIT_MULTIPLE = 'VOCABULARY__EDIT_MULTIPLE',
  VOCABULARY__EDITING_MULTIPLE = 'VOCABULARY__EDITING_MULTIPLE',
  VOCABULARY__EDIT_MULTIPLE_SUCCEEDED = 'VOCABULARY__EDIT_MULTIPLE_SUCCEEDED',
  VOCABULARY__EDIT_MULTIPLE_FAILED = 'VOCABULARY__EDIT_MULTIPLE_FAILED',
  VOCABULARY__UPLOADING_VOCABULARY = 'VOCABULARY__UPLOADING_VOCABULARY',
  VOCABULARY__UPLOAD_VOCABULARY_SUCCEEDED = 'VOCABULARY__UPLOAD_VOCABULARY_SUCCEEDED',
  VOCABULARY__UPLOAD_VOCABULARY_FAILED = 'VOCABULARY__UPLOAD_VOCABULARY_FAILED',
  VOCABULARY__DOWNLOADING_VOCABULARY = 'VOCABULARY__DOWNLOADING_VOCABULARY',
  VOCABULARY__DOWNLOAD_VOCABULARY_SUCCEEDED = 'VOCABULARY__DOWNLOAD_VOCABULARY_SUCCEEDED',
  VOCABULARY__DOWNLOAD_VOCABULARY_FAILED = 'VOCABULARY__DOWNLOAD_VOCABULARY_FAILED',
  VOCABULARY__DOWNLOADING_INCOMPATIBLE_VOCABULARY = 'VOCABULARY__DOWNLOADING_INCOMPATIBLE_VOCABULARY',
  VOCABULARY__DOWNLOAD_INCOMPATIBLE_VOCABULARY_SUCCEEDED = 'VOCABULARY__DOWNLOAD_INCOMPATIBLE_VOCABULARY_SUCCEEDED',
  VOCABULARY__DOWNLOAD_INCOMPATIBLE_VOCABULARY_FAILED = 'VOCABULARY__DOWNLOAD_INCOMPATIBLE_VOCABULARY_FAILED',
  VOCABULARY__PREPARE_FETCH = 'VOCABULARY__PREPARE_FETCH',
  VOCABULARY__PREPARING_FETCH = 'VOCABULARY__PREPARING_FETCH',
  VOCABULARY__PREPARE_FETCH_SUCCEEDED = 'VOCABULARY__PREPARE_FETCH_SUCCEEDED',
  VOCABULARY__PREPARE_FETCH_FAILED = 'VOCABULARY__PREPARE_FETCH_FAILED',
  VOCABULARY__FETCH = 'VOCABULARY__FETCH',
  VOCABULARY__FETCHING = 'VOCABULARY__FETCHING',
  VOCABULARY__FETCH_SUCCEEDED = 'VOCABULARY__FETCH_SUCCEEDED',
  VOCABULARY__FETCH_FAILED = 'VOCABULARY__FETCH_FAILED',
  VOCABULARY__CLEAR_FETCH = 'VOCABULARY__CLEAR_FETCH',

  WRITING__FETCH_VOCABULARY = 'WRITING__FETCH_VOCABULARY',
  WRITING__FETCHING_VOCABULARY = 'WRITING__FETCHING_VOCABULARY',
  WRITING__FETCH_VOCABULARY_SUCCEEDED = 'WRITING__FETCH_VOCABULARY_SUCCEEDED',
  WRITING__FETCH_VOCABULARY_FAILED = 'WRITING__FETCH_VOCABULARY_FAILED',
  WRITING__SAVE_RESULT = 'WRITING__SAVE_RESULT',
  WRITING__SAVING_RESULT = 'WRITING__SAVING_RESULT',
  WRITING__SAVE_RESULT_SUCCEEDED = 'WRITING__SAVE_RESULT_SUCCEEDED',
  WRITING__SAVE_RESULT_FAILED = 'WRITING__SAVE_RESULT_FAILED',
  WRITING__CLEAR_LESSON = 'WRITING__CLEAR_LESSON',

  FLASHCARD_PLAYER__UPLOAD = 'FLASHCARD_PLAYER__UPLOAD',
  FLASHCARD_PLAYER__UPLOADING = 'FLASHCARD_PLAYER__UPLOADING',
  FLASHCARD_PLAYER__UPLOAD_SUCCEEDED = 'FLASHCARD_PLAYER__UPLOAD_SUCCEEDED',
  FLASHCARD_PLAYER__UPLOAD_FAILED = 'FLASHCARD_PLAYER__UPLOAD_FAILED',

  IMAGE__PREPARE_SEARCH_IMAGES = 'IMAGE__PREPARE_SEARCH_IMAGES',
  IMAGE__PREPARING_SEARCH_IMAGES = 'IMAGE__PREPARING_SEARCH_IMAGES',
  IMAGE__PREPARE_SEARCH_IMAGES_SUCCEEDED = 'IMAGE__PREPARE_SEARCH_IMAGES_SUCCEEDED',
  IMAGE__PREPARE_SEARCH_IMAGES_FAILED = 'IMAGE__PREPARE_SEARCH_IMAGES_FAILED',
  IMAGE__SEARCH_IMAGES = 'IMAGE__SEARCH_IMAGES',
  IMAGE__SEARCHING_IMAGES = 'IMAGE__SEARCHING_IMAGES',
  IMAGE__SEARCH_IMAGES_SUCCEEDED = 'IMAGE__SEARCH_IMAGES_SUCCEEDED',
  IMAGE__SEARCH_IMAGES_FAILED = 'IMAGE__SEARCH_IMAGES_FAILED',
  IMAGE__CLEAR_SEARCH = 'IMAGE__CLEAR_SEARCH',
  IMAGE__UPLOAD_IMAGES = 'IMAGE__UPLOAD_IMAGES',
  IMAGE__UPLOADING_IMAGES = 'IMAGE__UPLOADING_IMAGES',
  IMAGE__UPLOAD_IMAGES_SUCCEEDED = 'IMAGE__UPLOAD_IMAGES_SUCCEEDED',
  IMAGE__UPLOAD_IMAGES_FAILED = 'IMAGE__UPLOAD_IMAGES_FAILED',

  REMINDER__CHECK_PERMISSION = 'REMINDER__CHECK_PERMISSION',
  REMINDER__CHECKING_PERMISSION = 'REMINDER__CHECKING_PERMISSION',
  REMINDER__CHECK_PERMISSION_SUCCEEDED = 'REMINDER__CHECK_PERMISSION_SUCCEEDED',
  REMINDER__CHECK_PERMISSION_FAILED = 'REMINDER__CHECK_PERMISSION_FAILED',
  REMINDER__REQUEST_PERMISSION = 'REMINDER__REQUEST_PERMISSION',
  REMINDER__REQUESTING_PERMISSION = 'REMINDER__REQUESTING_PERMISSION',
  REMINDER__REQUEST_PERMISSION_SUCCEEDED = 'REMINDER__REQUEST_PERMISSION_SUCCEEDED',
  REMINDER__REQUEST_PERMISSION_FAILED = 'REMINDER__REQUEST_PERMISSION_FAILED',
  REMINDER__SET_UP_REMINDER = 'REMINDER__SET_UP_REMINDERER',
  REMINDER__SETTING_UP_REMINDER = 'REMINDER__SETTING_UP_REMINDER',
  REMINDER__SET_UP_REMINDER_SUCCEEDED = 'REMINDER__SET_UP_REMINDER_SUCCEEDED',
  REMINDER__SET_UP_REMINDER_FAILED = 'REMINDER__SET_UP_REMINDER_FAILED',
  REMINDER__DELETE_REMINDER = 'REMINDER__DELETE_REMINDERER',
  REMINDER__DELETING_REMINDER = 'REMINDER__DELETING_REMINDER',
  REMINDER__DELETE_REMINDER_SUCCEEDED = 'REMINDER__DELETE_REMINDER_SUCCEEDED',
  REMINDER__DELETE_REMINDER_FAILED = 'REMINDER__DELETE_REMINDER_FAILED',

  THEME__SYSTEM_MODE_CHANGED = 'THEME__SYSTEM_MODE_CHANGED',
}
