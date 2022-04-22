import { useEffect } from 'react';
import {useState} from 'react'
import { Range, getTrackBackground } from 'react-range';
import { useSelector, useDispatch } from 'react-redux';
import { useMatch } from 'react-router-dom';
import { filtersMinMax, filterStoredMinMax } from '../../../redux/selectors';
import { filterProducts } from '../../../redux/actions';
import { currency } from '../../../utils/currency';


const RangeSlider = () => {
  const {params} = useMatch('/products/:url')
  const { url } = params
  const [MIN, MAX] = useSelector(state => filtersMinMax(state, url))
  const [values, setValues] = useState([MIN, MAX])
  const storedMinMax = useSelector(store => filterStoredMinMax(store, url))

  useEffect(() => { storedMinMax && setValues(storedMinMax) }, [url])//eslint-disable-line

  const dispatch = useDispatch()
  const setFinalValues = (values) => { dispatch(filterProducts(url, null, values))}

  return (
    <div className='filters__range'>
      <Range
        draggableTrack
        values={values}
        step={1}
        min={MIN}
        max={MAX}
        onChange={setValues}
        onFinalChange={setFinalValues}
        renderTrack={({ props, children }) => (
          <div
          className='filters__slider-track'
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
          >
            <div
              ref={props.ref}
              style={{
                background: getTrackBackground({
                  values,
                  colors: ['var(--light)', 'var(--gray-med)', 'var(--light)'],
                  min: MIN,
                  max: MAX,
                }),
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
              className='filters__slider-thumb'
            {...props}
            style={{
              ...props.style,
              '--color': isDragged ? 'var(--red)' : 'var(--gray-med)'
            }}
          >
          </div>
        )}
      />
      <div className='filters__slider-output'>
        <div>
          <span>от</span>
          <output>{currency(values[0])}</output>
        </div>
        <div>
          <span>до</span>
            <output>{currency(values[1])}</output>
        </div>
      </div>
    </div>
  )
}

export default RangeSlider