import {gql} from '@apollo/client'

export const LOAD_SINGLE_ARTIST_ALBUM = 
gql`
query getSingleArtistAlbum($name : String!){
    artist(name: $name){
      id,
      name,
      image,
      albums{
        id
        name
        image
        tracks{
          preview_url
        }
      }
    }
  }
`