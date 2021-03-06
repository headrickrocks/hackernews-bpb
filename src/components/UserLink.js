import React, { Component } from 'react'
import { AUTH_TOKEN } from '../constants'
import { timeDifferenceForDate } from '../utils'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
const VOTE_MUTATION = gql`
  mutation VoteMutation($linkId: ID!) {
    vote(linkId: $linkId) {
      id
      link {
        id
        votes {
          id
          user {
            id
          }
        }
      }
      user {
        id
        email
      }
    }
  }
`





class UserList extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)
    return (
      <div className="flex mt2 items-start">
        <div className="flex items-center">
  <span className="gray">{this.props.index + 1}.</span>
  {authToken && (
    <Mutation
    mutation={VOTE_MUTATION}
    variables={{ linkId: this.props.user.id }}
  >
  </Mutation>  
  )}
</div>

        <div className="ml1">
          <div>
            NAME: {this.props.user.name}
              ___ EMAIL: {this.props.user.email}
          </div>
          <div className="f6 lh-copy gray">
            
            
             
          
          </div>
        </div>
      </div>
    )
  }
  
}

export default UserList