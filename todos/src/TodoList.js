import React, { Component } from 'react';

class TodoList extends Component {
    render() {
        return (
            <div className="todoApp">
                <div className="header">
                    <form>
                        <input placeholder="Task" />
                        <button type="submit"> Add Task</button>
                    </form>
                </div>
            </div>
        )
    }
}