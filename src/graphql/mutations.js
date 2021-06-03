/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const createStore = /* GraphQL */ `
  mutation CreateStore(
    $input: CreateStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    createStore(input: $input, condition: $condition) {
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
export const updateStore = /* GraphQL */ `
  mutation UpdateStore(
    $input: UpdateStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    updateStore(input: $input, condition: $condition) {
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
export const createTransaction = /* GraphQL */ `
  mutation CreateTransaction(
    $input: CreateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    createTransaction(input: $input, condition: $condition) {
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
export const updateTransaction = /* GraphQL */ `
  mutation UpdateTransaction(
    $input: UpdateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    updateTransaction(input: $input, condition: $condition) {
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
