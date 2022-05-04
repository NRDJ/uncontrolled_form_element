class FileForm extends React.Component {
    constructor(props) {
      super(props);
      this.fileRef = React.createRef(); // use .createRef() to create a ref object
  
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      event.preventDefault();
      const file = this.fileRef.current.files[0].name;
      console.log(`form submitted.\nfile: ${file}`);
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            File:
            <input type="file" ref={this.fileRef} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  ReactDOM.render(
    <FileForm/>,
    document.getElementById('root')
  )

  