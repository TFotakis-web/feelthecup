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
      mobile_number
      birthdate
      cup_balance
      credits
      loyalty_balance
      no_of_cups_lost
      address {
        country
        city
        street
        number
        postal_code
      }
      stores {
        id
        uid
        phone
        municipality
        balance
        latitude
        longitude
        cups_remaining
      }
      _version
      _deleted
      _lastChangedAt
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
      mobile_number
      birthdate
      cup_balance
      credits
      loyalty_balance
      no_of_cups_lost
      address {
        country
        city
        street
        number
        postal_code
      }
      stores {
        id
        uid
        phone
        municipality
        balance
        latitude
        longitude
        cups_remaining
      }
      _version
      _deleted
      _lastChangedAt
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
      mobile_number
      birthdate
      cup_balance
      credits
      loyalty_balance
      no_of_cups_lost
      address {
        country
        city
        street
        number
        postal_code
      }
      stores {
        id
        uid
        phone
        municipality
        balance
        latitude
        longitude
        cups_remaining
      }
      _version
      _deleted
      _lastChangedAt
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
      udi
      status
      points
      _version
      _deleted
      _lastChangedAt
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
      udi
      status
      points
      _version
      _deleted
      _lastChangedAt
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
      udi
      status
      points
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
