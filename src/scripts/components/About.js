'use strict';

import DataStore from 'flux/stores/DataStore.js';

class About extends React.Component {
  render() {
    let pageData = DataStore.getPageBySlug('about');

    return (
      <div>
        <h1>{pageData.title.rendered}</h1>

        <div dangerouslySetInnerHTML={{__html: pageData.excerpt.rendered}} />
      </div>
    );
  }
}

export default About;
