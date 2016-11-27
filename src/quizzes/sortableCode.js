let SortableListView = require('react-native-sortable-listview');
import React from 'react';
import {
    View,
    Text,
    TouchableHighlight
} from 'react-native';
import {
    Card,
    Button
} from 'react-native-material-design';

var RowComponent = React.createClass({
    render: function() {
        return (
            <TouchableHighlight
                underlayColor={'#eee'}
                delayLongPress={200}
                style={{paddingLeft: 25, paddingTop: 10, paddingBottom: 10, backgroundColor: "#F8F8F8", borderBottomWidth:1, borderColor: '#eee'}}
                {...this.props.sortHandlers}
            >
                <Text>{this.props.data.text}</Text>
            </TouchableHighlight>
        );
    }
});

var Sortable = React.createClass({
    getInitialState() {
        return {
            order: []
        }
    },

    componentDidMount() {
        this.setState({
            order: Object.keys(this.props.data)
        });
    },

    render() {
        return (
            <View style={{flex: 1}}>
                <Card>
                    <Card.Body>
                        <Text>{this.props.quiz.data.question}</Text>
                    </Card.Body>
                </Card>
                <SortableListView
                    style={{flex: 1}}
                    data={this.props.data}
                    order={this.state.order}
                    onRowMoved={e => {
                    var order = this.state.order;
                    order.splice(e.to, 0, order.splice(e.from, 1)[0]);
                    this.forceUpdate();
                    this.props.onAnswerChange(order.map(Number));
                }}
                    renderRow={row => <RowComponent data={row} />}
                />
                <Button text="SUBMIT" onPress={this.props.onSubmitAnswer}/>
            </View>
        );
    }
});

export default Sortable;