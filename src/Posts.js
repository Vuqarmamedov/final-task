import React from "react";
import { connect } from "react-redux";
import { fetchPosts,searchAction} from "./actions";
import ReactLoading from 'react-loading';

class Posts extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }


    componentDidMount() {
        this.props.fetchPosts();
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        });
    };

    renderList() {
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        if (this.props.status === "loading"){
            return <div className="loading"> <ReactLoading type={'spinningBubbles'} color={'#ff0000'} height={667} width={375} /></div>
        }
        else if (this.props.status === "error"){
            return <div>Something went wrong</div>
        }
        else{
            return (
                <div className="ui container">
                    <form className="srch">
                        <input onChange={this.handleChange} type="text"/>
                        <button type={onsubmit} onClick={()=> this.props.searchAction(this.state.value)}>Search</button>
                    </form>
                    <div className="ui relaxed divided list">{this.renderList()}</div>
                </div>
            )
        }

    }
}

const mapStateToProps = (state) => {
    return{
        status: state.status,
        posts: state.posts,
    }
};

export default connect (mapStateToProps, { fetchPosts,searchAction })(Posts);