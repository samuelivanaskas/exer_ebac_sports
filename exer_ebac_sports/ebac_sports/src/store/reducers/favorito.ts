import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {Produto} from '../../App'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState ={
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favorito',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload;

      if (state.itens.find(produto => produto.id !== produto.id)){
        alert('Produto favorito')
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
