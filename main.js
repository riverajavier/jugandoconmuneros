const { createApp, ref } = Vue

const app = createApp({
  setup() {
    const num = ref(0)

    const cambiarNumero = (incremento) => {
      num.value += incremento
    }

    const binario = () => {
      if (num.value === 0) return '0'
      return num.value < 0 ? '-' + Math.abs(num.value).toString(2) : num.value.toString(2)
    }

    const valor = () => {
      if (num.value > 0) return 'POSITIVO'
      if (num.value < 0) return 'NEGATIVO'
      return '0'
    }

    return {
      num,
      cambiarNumero,
      binario,
      valor
    }
  }
})

app.mount('#app')