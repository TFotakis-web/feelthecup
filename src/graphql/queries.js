/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      sub
      name
      surname
      email
      mobileNumber
      birthdate
      cup_balance
      credits
      loyaltyBalance
      noOfCupsUsed
      noOfCupsLost
      pointsUsed
      noOfRewards
      address {
        country
        city
        municipality
        latitude
        longitude
        street
        number
        postalCode
      }
      profilePicture {
        level
        filePath
        filename
        contentType
      }
      preferences
      stores
      deposits {
        amount
        payedAt
        store
      }
      friends
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sub
        name
        surname
        email
        mobileNumber
        birthdate
        cup_balance
        credits
        loyaltyBalance
        noOfCupsUsed
        noOfCupsLost
        pointsUsed
        noOfRewards
        address {
          country
          city
          municipality
          latitude
          longitude
          street
          number
          postalCode
        }
        profilePicture {
          level
          filePath
          filename
          contentType
        }
        preferences
        stores
        deposits {
          amount
          payedAt
          store
        }
        friends
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getStore = /* GraphQL */ `
  query GetStore($id: ID!) {
    getStore(id: $id) {
      id
      uid
      phone
      email
      cupsDefault
      cupsRemaining
      address {
        country
        city
        municipality
        latitude
        longitude
        street
        number
        postalCode
      }
      tin
      active
      contracts {
        id
        store
        plan {
          rewards
          noOfCups
          charge
        }
        invoice {
          amount
          generatedAt
          payedAt
          cancelled
        }
        signedAt
        startingAt
        expiringAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listStores = /* GraphQL */ `
  query ListStores(
    $filter: ModelStoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStores(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        uid
        phone
        email
        cupsDefault
        cupsRemaining
        address {
          country
          city
          municipality
          latitude
          longitude
          street
          number
          postalCode
        }
        tin
        active
        contracts {
          id
          store
          signedAt
          startingAt
          expiringAt
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getTransaction = /* GraphQL */ `
  query GetTransaction($id: ID!) {
    getTransaction(id: $id) {
      id
      user
      status
      rewards {
        points
        type
      }
      receivedFrom
      receivedAt
      returnedTo
      returnedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listTransactions = /* GraphQL */ `
  query ListTransactions(
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user
        status
        rewards {
          points
          type
        }
        receivedFrom
        receivedAt
        returnedTo
        returnedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
