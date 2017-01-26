var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
  return (
    <div>
      <h2>Nav Component</h2>
      <IndexLink to='/' activeClassName='faal' activeStyle={{fontWeight: 'bold'}}>Weather</IndexLink>
      <Link to='/about' activeClassName='faal' activeStyle={{fontWeight: 'bold'}}>About</Link>
      <Link to='/examples' activeClassName='faal' activeStyle={{fontWeight: 'bold'}}>Examples</Link>
    </div>
  );
}

module.exports = Nav;
