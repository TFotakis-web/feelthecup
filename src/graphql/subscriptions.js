/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteStore = /* GraphQL */ `
  subscription OnDeleteStore {
    onDeleteStore {
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
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTransaction = /* GraphQL */ `
  subscription OnCreateTransaction {
    onCreateTransaction {
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
    }
  }
`;
export const onUpdateTransaction = /* GraphQL */ `
  subscription OnUpdateTransaction {
    onUpdateTransaction {
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
    }
  }
`;
export const onDeleteTransaction = /* GraphQL */ `
  subscription OnDeleteTransaction {
    onDeleteTransaction {
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
    }
  }
`;
