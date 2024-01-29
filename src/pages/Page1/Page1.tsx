import Table_first from '../.././components/Table_first';
import Button from '../.././components/Button';

const Page1 = () => {
    return (
        <div>
            <Button className='first'>Старт</Button>
            <Button className='second'>Пауза</Button>
            <Button className='third'>Стоп</Button>
            <Table_first />
        </div>
    )
}

export default Page1