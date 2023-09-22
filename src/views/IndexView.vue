<template>
  <nav class="navbar sticky-top">
    <div style="display: flex;justify-content: space-between;width: 100%">
      <div style="width: 200px">
        <span class="text-nav">Instancia</span>
        <v-select class="style-chooser" :components="{ Deselect }"
                  v-model="instancia_select"
                  placeholder="Instacias"
                  label="nombre" :options="instancias"
                  :reduce="nombre => nombre.id" @update:modelValue="getParam"></v-select>
      </div>
      <div style="width: 200px">
        <span class="text-nav">Entornos</span>
        <v-select class="style-chooser" :components="{ Deselect }"
                  v-model="entornos_select"
                  placeholder="Entornos"
                  label="nombre" :options="entornos"
                  :reduce="nombre => nombre.id" @update:modelValue="getParam"></v-select>
      </div>
      <div style="width: 200px">
        <span class="text-nav">Periodos</span>
        <v-select class="style-chooser" :components="{ Deselect }"
                  v-model="periodos_select"
                  placeholder="Periodos"
                  label="nombre" :options="periodos"
                  :reduce="nombre => nombre.id" @update:modelValue="getParam"></v-select>
      </div>
      <div style="width: 200px">
        <span class="text-nav">Opciones</span>
        <v-select class="style-chooser" :components="{ Deselect }"
                  v-model="opciones_select"
                  placeholder="Opciones"
                  label="nombre" :options="opciones"
                  :reduce="nombre => nombre.id" @update:modelValue="getParam"></v-select>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
import {onMounted, ref} from 'vue'
import dataPredictive from "@/store/data";

const instancias = ref('')
const instancia_select = ref('')
const entornos = ref('')
const entornos_select = ref(0)
const periodos = ref('')
const opciones = ref('')
const opciones_select = ref('')
const periodos_select = ref(0)
const store = dataPredictive()

onMounted(async () => {
  await store.getDataIni()
  instancias.value = store.instancias
  entornos.value = store.entornos
  periodos.value = store.periodos
  opciones.value = store.opciones
})

const getParam = async () => {
  alert(entornos_select.value)
  await store.getData('Soria', 1, 2016, 2, 3, 'Mes Actual')
}
</script>

<style>
* {
  background-color: #11263C;
}

nav {
  background-color: #283B4F;
  color: white;
}

.text-nav {
  color: orange;
  font-size: 11px;
  line-height: 100%;
  vertical-align: top;
}

.style-chooser {
  background-color: #283B4F;
  border-radius: 5px;
  width: 12vw;
}
</style>