import React from "react";
import { v4 as uuidv4 } from "uuid";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      username: [],
      chirp: "",
      chirpText: [],
    };
  }
  componentDidMount() {
    this.setState({
      username: [
        ...this.state.username,
        { id: uuidv4(), user: "nathanfielder" },
        { id: uuidv4(), user: "nathanfielder" },
        { id: uuidv4(), user: "nathanfielder" },
      ],
    });
    this.setState({
      chirpText: [
        ...this.state.chirpText,
        { id: uuidv4(), chirp: "My name is Nathan Fielder" },
        {
          id: uuidv4(),
          chirp: `I graduated from one of Canada’s top business schools`,
        },
        { id: uuidv4(), chirp: "with really good grades" },
      ],
    });
  }

  handleSubmit() {
    console.log(this.state.user);
    console.log(this.state.chirp);
    this.setState({
      user: "",
      username: [
        ...this.state.username,
        { id: uuidv4(), user: this.state.user },
      ],
    });
    this.setState({
      chirp: "",
      chirpText: [
        ...this.state.chirpText,
        { id: uuidv4(), chirp: this.state.chirp },
      ],
    });
  }
  render() {
    return (
      <>
        <div className="container">
        <p className="lead text-center my-2">
  Chirper
</p>
          <div className="input-group ">
            <span className="input-group-text border-primary" id="basic-addon1">
              @
            </span>
            <input
              type="text"
              value={this.state.user}
              onChange={(e) => this.setState({ user: e.target.value })}
              className="form-control border-primary"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
            <input
              type="text"
              value={this.state.chirp}
              onChange={(e) => this.setState({ chirp: e.target.value })}
              className="form-control border-primary"
              placeholder="What's on your mind?"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
            <button
              onClick={(e) => {
                this.handleSubmit(e);
              }}
              className="btn btn-outline-primary"
              type="button"
              id="button-addon1"
            >
              Send Chirp
            </button>
          </div>

          <div className="container d-flex justify-content-center mt-3">
            <ul className="list-group">
              {this.state.username.map((name) => (
                <li key={`user-chirp-${name.id}`} className="list-group-item">
                  @{name.user}:
                </li>
              ))}
            </ul>
            <ul className="list-group">
              {this.state.chirpText.map((chirpText) => (
                <li
                  key={`user-chirp-${chirpText.id}`}
                  className="list-group-item"
                >
                  {chirpText.chirp}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default App;
