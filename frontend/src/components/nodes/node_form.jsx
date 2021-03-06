import React from 'react'
import '../../styles/reset.scss';

class NodeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      tree_id: this.props.tree._id
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    let node = this.state;
    this.props.createNode(node)
      .then(() => this.setState({
        name: ''
      }))
    this.props.getTreeNodes(this.state.tree_id)
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  render() {
    return (
      <div>
        <div>Grow your Tree!</div>
        <form onSubmit={this.handleSubmit} className='create-node-form'>
          <input
            type='text'
            value={this.state.name}
            onChange={this.update('name')}
            placeholder='Node Name'
            className='node-form-input'
          />
          <div>
          <input
            className='node-form-submit'
            type='submit'
            value='Create Node'
          />
          </div>
        </form>
      </div>
    );
  }
};

export default NodeForm;