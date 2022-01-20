import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { setContext } from 'apollo-link-context'
import { FEED_QUERY } from './CommentList'
import { LINKS_PER_PAGE } from '../constants'

const POST_MUTATION = gql`
  mutation PostMutation($title: String!, $content: String!) {
    comment(title: $title, content: $content) {
      id
      title
      content
    }
  }
`

// const COMMENT_MUTATION = gql`
//   mutation CommentMutation($title: String!, $content: String!) {
//     comment(title: $title, content: $content) {
//       id
//       title
//       content
//     }
//   }
// `

class CreateComment extends Component {
  state = {
    title: '',
    content: ''
  }

  render() {
    const { title, content } = this.state
    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={title}
            onChange={e => this.setState({ title: e.target.value })}
            type="text"
            placeholder="A title for the comment"
          />
          <input
            className="mb2"
            value={content}
            onChange={e => this.setState({ content: e.target.value })}
            type="text"
            placeholder="The content for the comment"
          />
          {/* <input
            className="mb2"
            value={tag}
            onChange={e => this.setState({ tag: e.target.value })}
            type="text"
            placeholder="tag or category"
          /> */}
        </div>
        <Mutation
          mutation={POST_MUTATION}
          variables={{ title, content }}
          onCompleted={() => this.props.history.push('/commentlist')}
          // onCompleted={() => this.props.history.push('/new/1')}
          update={(store, { data: { comment } }) => {
            const first = LINKS_PER_PAGE
            const skip = 0
            const orderBy = 'createdAt_DESC'
            const data = store.readQuery({
              query: FEED_QUERY,
              variables: { first, skip, orderBy }
            })
            data.feed.links.unshift(comment)
            store.writeQuery({
              query: FEED_QUERY,
              data,
              variables: { first, skip, orderBy }
            })
          }}
        >
          {/* {postMutation => <button onClick={postMutation}>Submit</button>} */}
          {postMutation => <button onClick={postMutation}>Submit</button>}
        </Mutation>
      </div>
    )
  }
}

//not sure if Mutation was replaced in correct spot

export default CreateComment