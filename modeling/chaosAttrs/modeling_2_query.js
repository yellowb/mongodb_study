db.modeling_2.find({});

// Equality query
db.modeling_2.find({attrs: {"facebook" : "LHXQC-PKVAP"}});
db.modeling_2.find({attrs: {"facebook" : "LHXQC-PKVAP"}}).explain('executionStats');

// One index to support all equality query
db.modeling_2.createIndex({attrs: 1});
db.modeling_2.dropIndex('attrs_1');    // just for testing

// Range query
db.modeling_2.find({attrs: {$elemMatch: {"city": {$gt: 9500}}}});
db.modeling_2.find({attrs: {$elemMatch: {"city": {$gt: 9500}}}}).explain('executionStats');

// For range query on each field, need one index on embeded field
db.modeling_2.createIndex({'attrs.city': 1});
db.modeling_2.dropIndex('attrs.city_1');    // just for testing





