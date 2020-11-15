import axios from 'axios';

export function loadColor() {
  return dispatch => {
    return axios.get('http://www.colr.org/json/color/random')
                .then(response =>
                {
                  const newColor = response.data.new_color ? ('#' + response.data.new_color) : '#f00';
                  console.log('Success: ' + newColor);

                  dispatch(changeColor(newColor));
                });
  };
};

export function changeColor(color) {
  return {
    type: 'CHANGE_COLOR',
    color: color
  };
};