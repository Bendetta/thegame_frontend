import IndexedDBAdapter from 'ember-indexeddb-adapter/adapters/indexeddb';

export default IndexedDBAdapter.extend({
  dbName: 'thegame',

  version: 3,

  models: ['item', 'message']
});
