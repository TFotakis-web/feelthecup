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
      noOfCupsLost
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
      noOfCupsLost
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String!) {
    onDeleteUser(owner: $owner) {
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
      noOfCupsLost
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
export const onCreateStore = /* GraphQL */ `
  subscription OnCreateStore($owner: String!) {
    onCreateStore(owner: $owner) {
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
export const onUpdateStore = /* GraphQL */ `
  subscription OnUpdateStore($owner: String!) {
    onUpdateStore(owner: $owner) {
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
export const onDeleteStore = /* GraphQL */ `
  subscription OnDeleteStore($owner: String!) {
    onDeleteStore(owner: $owner) {
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
export const onCreateTransaction = /* GraphQL */ `
  subscription OnCreateTransaction($owner: String!) {
    onCreateTransaction(owner: $owner) {
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
export const onUpdateTransaction = /* GraphQL */ `
  subscription OnUpdateTransaction($owner: String!) {
    onUpdateTransaction(owner: $owner) {
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
export const onDeleteTransaction = /* GraphQL */ `
  subscription OnDeleteTransaction($owner: String!) {
    onDeleteTransaction(owner: $owner) {
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
