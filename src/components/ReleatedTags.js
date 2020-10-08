import React from 'react';
import { Link } from 'react-router-dom';
import { API_URLS } from '../helper/urls';

function ReleatedTags(props) {
  const { input } = props;
  return (
    <div className="releated-tags">
      {input.map((value) => {
        return (
          <div className="releated-tags-item" key={value._id}>
            <Link
              to={API_URLS.linkToSearchComponent(value.tag)}
              className="link-search"
            >
              <span>{value.tag}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ReleatedTags;
