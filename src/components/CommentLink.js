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

class CommentList extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)
    return (
      <div className="flex mt2 items-start">
        <div className="flex items-center">
  <span className="gray">{this.props.index + 1}.</span>
  {authToken && (
    <Mutation
    mutation={VOTE_MUTATION}
    variables={{ linkId: this.props.comment.id }}
  >
  </Mutation>  
  )}
</div>
        <div className="ml1">
          <div>
          TITLE: {this.props.comment.title} ____ CONTENT: {this.props.comment.content}
          </div>
          <div className="f6 lh-copy gray">
          </div>
        </div>
      </div>
    )
  }
  
}

export default CommentList