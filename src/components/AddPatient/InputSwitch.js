import React from 'react';
import TextInput from './TextInput';
import GenderInput from './GenderInput';
import RelationshipInput from './RelationshipInput';
import PhysiciansInput from './PhysiciansInput';
import SliderInput from './SliderInput';
import {useSelector} from 'react-redux';

const InputSwitch = () => {
  const {field} = useSelector(state => state);

  let component;

  switch (field) {
    case 'age':
      component = <TextInput type="Idade" />;
      break;
    case 'gender':
      component = <GenderInput type="Sexo" />;
      break;
    case 'relationship':
      component = <RelationshipInput type="Parentesco" />;
      break;
    case 'physicians':
      component = <PhysiciansInput type="Physicians" />;
      break;
    case 'weight':
      component = <TextInput type="Weight" />;
      break;
    case 'mentalState':
      component = <SliderInput type="Mental State" />;
      break;
    case 'mentalHealth':
      component = <SliderInput type="Mental Health" />;
      break;
    case 'physicalHealth':
      component = <SliderInput type="Physical Health" />;
      break;
    case 'locomotion':
      component = <SliderInput type="Locomotion" />;
      break;
    case 'generalHealth':
      component = <SliderInput type="General Health" tail={true} />;
      break;
    default:
      component = <TextInput type="Nome" />;
  }
  return component;
};

export default InputSwitch;