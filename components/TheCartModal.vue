<script lang="ts" setup>
import { TempItems } from '~~/types';

const tempItems = useTempItems();
const showCartModal = useShowCartModal();
const productCountState = useState<{ [id: string]: number; }>('productCountState', () => ({}));

//function
const cartModalClose = () => { showCartModal.value = false; };
const delProduct = (_id: number, _price: string) => {
  tempItems.value = tempItems.value.filter(({ id }) => id != _id);
  productCountState.value[_id + ':' + _price] = null as any;
};
const changeCount = (sup: number, _id: number, _price: string) => productCountState.value[_id + ':' + _price] += sup;
const calcSum = (target: TempItems[]) => target.reduce((a, b) => {
  const { price, id } = b;
  const _price = productCountState.value[id + ':' + price] * +price;
  return a + _price;
}, 0).toFixed(2);

const sum = ref(calcSum(tempItems.value));

watch([tempItems, productCountState], () => {
  for (const item of tempItems.value) productCountState.value[item.id + ':' + item.price] ??= 1;
  sum.value = calcSum(tempItems.value);

}, { deep: true });
</script>

<template>


  <Teleport to="body">
    <div v-show="showCartModal" class="fixed w-full h-screen bg-black opacity-50 z-20"></div>
    <div v-show="showCartModal" class="w-[30vw] fixed flex-col top-0 right-0 h-screen z-50 bg-gray-200 overflow-y-auto">
      <div class="flex justify-between mb-6 mx-1 mt-1">
        <button @click="cartModalClose"
          class="text-xl py-2 px-4 rounded shadow-sm font-bold text-red-500 bg-white hover:text-yellow-500 duration-300">X</button>
        <p class="text-xl text-yellow-400 py-2 px-4 rounded shadow-sm font-bold bg-white">SUM: {{ sum }}</p>
      </div>
      <div class="grid grid-cols-1 gap-6 px-10">
        <div v-for="item of tempItems" :key="item.id + ':modal:' + item.price"
          class="flex justify-between items-center rounded shadow-lg p-2 bg-white duration-300">
          <div class="mr-2">
            <TheImage :url="item.image" :alt="item.title" class="h-28 w-28" />
          </div>
          <div class="w-1/2">
            <p>{{ item.title }}</p>
            <p class="text-teal-500 mt-3 font-semibold">Price ${{ item.price }}</p>
          </div>
          <div class="flex flex-col justify-between h-full">
            <div class="flex justify-end">
              <button class="py-2 px-4 text-red-400 rounded shadow active:shadow-sm font-bold"
                @click="() => delProduct(item.id, item.price)">X</button>
            </div>
            <div class="flex items-center justify-center shadow rounded font-bold">
              <button class="hover:shadow-md active:shadow-none py-2 px-4 text-green-400"
                @click="() => changeCount(1, item.id, item.price)">+</button>
              <button class="py-2 px-4  border-x-[0.5px]">{{ productCountState[item.id + ':' + item.price] }}</button>
              <button class="hover:shadow-md active:shadow-none disabled:bg-slate-100 py-2 px-4 text-green-400"
                @click="() => changeCount(-1, item.id, item.price)"
                :disabled="productCountState[item.id + ':' + item.price] < 2">-</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>