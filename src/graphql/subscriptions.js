/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String!) {
    onCreateUser(owner: $owner) {
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
      cupsPerWeek
      hoursPerCup
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
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String!) {
    onUpdateUser(owner: $owner) {
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
      cupsPerWeek
      hoursPerCup
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
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateStore = /* GraphQL */ `
  subscription OnCreateStore {
    onCreateStore {
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
      logo {
        level
        filePath
        filename
        contentType
      }
      preferences
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateStore = /* GraphQL */ `
  subscription OnUpdateStore {
    onUpdateStore {
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
      logo {
        level
        filePath
        filename
        contentType
      }
      preferences
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTransaction = /* GraphQL */ `
  subscription OnCreateTransaction($owner: String!, $user: String!) {
    onCreateTransaction(owner: $owner, user: $user) {
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
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTransaction = /* GraphQL */ `
  subscription OnUpdateTransaction($owner: String!, $user: String!) {
    onUpdateTransaction(owner: $owner, user: $user) {
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
      owner
      createdAt
      updatedAt
    }
  }
`;
