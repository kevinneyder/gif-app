import {shallow} from 'enzyme';
import {GifGridItem} from '../../components/GifGridItem';

describe('Prueba Gif grid', () => {
    
    test('Debe mostrar el componente correctamente', () => {
        const wrapper = shallow(<GifGridItem />);
        expect(wrapper).toMatchSnapshot();
    })
    

})
