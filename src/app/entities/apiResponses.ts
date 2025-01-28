interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: {
    lat: string
    lng: string
  }
}
export interface ApiUserResponse {
  id: number
  name: string
  username: string
  email: string;
  address: Address
}

export interface ApiPostResponse {
  userId: number
  id: number
  title: string
  body: string
}
 