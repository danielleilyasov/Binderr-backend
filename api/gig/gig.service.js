const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
  // remove,
  query,
  getById,
  // add,
  // update,
}

async function query(filterBy) {
  try {
    const criteria = _buildCriteria(filterBy)
    // const criteria = {}

    const collection = await dbService.getCollection('gig')
    var gigs = await collection.find(criteria).toArray()
    return gigs
  } catch (err) {
    logger.error('cannot find gigs', err)
    throw err
  }
}

async function getById(toyId) {
  try {
    const collection = await dbService.getCollection('toy')
    const toy = collection.findOne({ _id: ObjectId(toyId) })
    return toy
  } catch (err) {
    logger.error(`while finding toy ${toyId}`, err)
    throw err
  }
}

// async function remove(gigId) {
//   try {
//     const collection = await dbService.getCollection('gig')
//     await collection.deleteOne({ _id: ObjectId(gigId) })
//     return gigId
//   } catch (err) {
//     logger.error(`cannot remove gig ${gigId}`, err)
//     throw err
//   }
// }

// async function add(gig) {
//   try {
//     const collection = await dbService.getCollection('gig')
//     const addedGig = await collection.insertOne(gig)
//     return addedGig
//   } catch (err) {
//     logger.error('cannot insert gig', err)
//     throw err
//   }
// }

// async function update(gig) {
//   try {
//     var id = ObjectId(gig._id)
//     delete gig._id
//     const collection = await dbService.getCollection('gig')
//     await collection.updateOne({ _id: id }, { $set: { ...gig } })
//     return gig
//   } catch (err) {
//     logger.error(`cannot update gig ${gig._id}`, err)
//     throw err
//   }
// }

function _buildCriteria(filterBy) {
  const criteria = {}

  // by name
  // const regex = new RegExp(filterBy.name, 'i')
  // criteria.name = { $regex: regex }

  // filter by inStock
  // if (filterBy.inStock) {
  //   criteria.inStock = { $eq: JSON.parse(filterBy.inStock) }
  // }

  // filter by labels
  // if (filterBy.labels?.length) {
  //   criteria.labels = { $in: filterBy.labels }
  // }

  return criteria
}
