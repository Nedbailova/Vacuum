import { useState, useEffect } from 'react';
import './Table_first.css'
import Dropdown from '../.././components/Dropdown';

const Table_first = () => {

  const dropdownOptions = ['Default', 'Default 1', 'Default 2', 'Custom', 'Custom 1', 'Custom 2'];
  const handleSelect = (selectedOption: string) => {
    console.log(`Selected option: ${selectedOption}`);
  };

// в идеале получение апи должно выглядеть как-то так, но т.к. нет данных, то я буду работать по строке
//   useEffect(() => {
//     fetch(url) 
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {y
//         console.log(data);
//         setPhotoszy(data);
//       });
//   }, []);

const jsonString = '{"current_values":{"antiseptic_power":0,"voltage_power":0,"pressure":0},"process":{"running":true,"paused":true,"started_at":"string","paused_at":"string","step_idx":0,"step_remaining_time":0,"total_worked_time":0,"mode":{"id":0,"name":"string","steps":[{"duration":0,"antiseptic":{"type":"const","args":{"min":0,"max":100,"period":120}},"voltage":{"type":"const","args":{"min":0,"max":100,"period":120}},"pressure":{"type":"const","args":{"min":0,"max":100,"period":120}}}]}}}'
const obj = JSON.parse(jsonString)

  return (
    <div className='Block'>
      <table>
      <caption>Статус</caption>
        <tbody>
        <tr><td>Режим: <Dropdown options={dropdownOptions} onSelect={handleSelect} /></td></tr>
        <tr><td>Количество фаз: {obj.process.mode.steps.length}</td></tr>
        <tr><td>Номер текущей фазы: {obj.process.step_idx}</td></tr>
        <tr><td>Текущие величины:</td></tr>
        <tr><td className = "current_values">Давление: {obj.current_values.pressure} Hg </td></tr>
        <tr><td className = "current_values">Антисептик: {obj.current_values.antiseptic_power} % </td></tr>
        <tr><td className = "current_values">Напряжение: {obj.current_values.voltage_power} % </td></tr>
        <tr><td>Продолжительность фазы: {obj.process.total_worked_time} мин</td></tr>
        <tr><td>Оставшееся время: {obj.process.step_remaining_time } мин</td></tr>
        </tbody>
      </table>

      <table>
      <caption>Описание фаз</caption>
        <tbody>
        <tr><td>Текст для оформления</td></tr>
        <tr><td>Текст для оформления</td></tr>
        <tr><td>Текст для оформления</td></tr>
        <tr><td>Текст для оформления</td></tr>
        <tr><td>Текст для оформления</td></tr>
        <tr><td>Текст для оформления</td></tr>
        <tr><td>Текст для оформления</td></tr>
        <tr><td>Текст для оформления</td></tr>
        </tbody>
      </table>

    </div>

  );
};

export default Table_first;