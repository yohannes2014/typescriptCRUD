import React from 'react';
import { Container } from 'react-bootstrap';
import { name, any, number, employee, student, graph, music, nameAge, idIndex, AlphaBet, Direction, MixedEnu, multiply } from './typesStudy'


const TypeStudy: React.FC = () => {

    number.push(12);
    employee.pop()
    employee.push('Haile');

    console.log(multiply(11, 12));

    return (
        <Container fluid="lg">
            <h2>Typescript</h2>
            <p>{name}</p>
            <p>{any}</p>
            {/*    {number.map((item)=><p>{item}</p>)} */}
            <p>{number}</p>
            {employee.map((name, id) => (<p key={id} >{name}</p>))}
 
            <p>{student}</p>

            {graph.map((axis, id) => (<span key={id}>{axis}</span>))}
            <p>{music.title}</p>

            <p>{nameAge[3]}</p>
            <p>{idIndex[2]}</p>

            <p>{AlphaBet[0]}</p>

            <p>{Direction.Down}</p>
            <p>{MixedEnu.Orange}</p>
            <p>{MixedEnu[0]} = {MixedEnu.Banana}</p>
            <p>{MixedEnu[2]} = {MixedEnu.Apple}</p>
            <p>{MixedEnu[3]} = {MixedEnu.Avocado}</p>




        </Container>
    );
}

export default TypeStudy