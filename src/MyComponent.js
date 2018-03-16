import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getThings} from './actions/actionCreator'

const MyComponent = ({ things, getThings}) =>(
    <div onClick={()=> getThings()}>
        {things}
    </div>
)

const mapStateToProps = state => ({
    things: state.things.all,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getThings,
},dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyComponent)