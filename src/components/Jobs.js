import React from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { graphql, useStaticQuery, Link } from 'gatsby'

import Title from './Title'

const query = graphql`
  {
    allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
      nodes {
        strapiId
        company
        date
        position
        desc {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => <h2>jobs component</h2>

export default Jobs
