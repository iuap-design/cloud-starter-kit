

class Title extends React.Component {

  handleClick = () => {
    alert('====')
  }

  render(){
    return (
      <div>
        <h1 onClick={this.handleClick}>hh</h1>
        <h3>jfdshfjshfd</h3>
      </div>
    )
  }
}

export default Title;
