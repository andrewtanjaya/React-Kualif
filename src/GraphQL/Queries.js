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
            id
            name
            preview_url
        }
      }
    }
  }
`

export const LOAD_SINGLE_ALBUM_TRACKS = 
gql`
query getAlbum($id : String!){
    album(id: $id){
      tracks{
        id
        name
        preview_url
      }
    }
  }
`