db.modeling.find({});

// Equality query
db.modeling.find({weibo: 'GYEUY-F7PM8'});
db.modeling.find({weibo: 'GYEUY-F7PM8'}).explain('executionStats');

// One index to support all equality query
db.modeling.createIndex({weibo: 1});
db.modeling.dropIndex('weibo_1');    // just for testing

// Range query
db.modeling.find({"city": {$gt: 9500}});
db.modeling.find({"city": {$gt: 9500}}).explain('executionStats');

// For range query on each field, need one index on embeded field
db.modeling.createIndex({'city': 1});
db.modeling.dropIndex('city_1');    // just for testing