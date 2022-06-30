<template>
  <div id="app" style="max-width:600px;margin:0 auto;">
    <div style="border:1px solid #ccc;">
      <router-link to="/" style="color:white;background:blue;">Home</router-link> |
      <router-link to="/about" style="color:white;background:blue;">About</router-link>
      <div style="width:100%;height:200px;background:yellow;overflow:hidden;">
        <router-view/>
      </div>
    </div>

    <!-- <ATest @click=""></ATest> -->
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/> -->
    <CouponShow
      :canAddCoupon="true"
      :couponData="coupondata"
      :onlyShowCoupon="true"
      :checkCodeParams="{}"
      :environment="env"
      :goodsInfoCoupon="goods"
    ></CouponShow>
    <button @click="dianji">dianji</button>

    <div class="grid-container" style="font-size:15px;">
      JS:{{JX}} </br>
      uA:{{uA}} </br>
      uS:{{uS}} </br>
      SS:{{SS}} </br>
      env:{{env}}
      <div style="height:26px;width:100%;background:black;"></div>
      <!-- <div class="g2" v-show="isIphone"></div> -->
    </div>

  </div>
</template>

<script>
// import ATest from './views/Test.vue'
export default {
  methods: {
    dianji () {
      // this.env = 'distributionApplet'
      // this.goods = {
      //   prePayParams: {
      //     cu_id: 'couponNoUse',
      //     promo_code: '11111'
      //   }
      // }
      this.env = window.__wxjs_environment
    }
  },
  onMounted () {

  },
  data () {
    return {
      env: '',
      goods: {},
      coupondata: {
        original_price: 11111100,
        coupon_discount: 100,
        order_price: 5555450,
        rate_price: 5555450,
        is_pinkage: false,
        freight: 0,
        discount_type: 1,
        integral: {
          used_point: 0,
          available_point: 0,
          discount_type: 109,
          discount_price: 0,
          invalid_text: '可用积分0, 满1可用积分抵现',
          is_available: false,
          is_use_integral: 0
        },
        can_use_integral: false,
        optimal_coupon: {
          id: 'cou_62738ef4e04d6-hPGs5q',
          title: 'hd券后价test1',
          type: 1,
          instructions: '77777777777777',
          valid_at: '2022-05-05 16:46:00',
          invalid_at: '2022-06-11 00:00:00',
          price: 100,
          require_price: 0,
          discount_way: 1,
          discount_percent: 0,
          discount_limit_price: 0,
          can_use_with_activity: 1,
          bind_res_count: 0,
          cu_id: 'cu_6275d2c3db90e_4MtqnjrL',
          receive_at: '2022-05-07 10:00:35',
          invalid_text: '',
          valid_type: 'valid',
          has_detail: 0,
          is_support_superposition: 1,
          discount_price: 100,
          preferential_price: 100
        },
        best_coupon: {
          id: 'cou_62738ef4e04d6-hPGs5q',
          title: 'hd券后价test1',
          type: 1,
          instructions: '77777777777777',
          valid_at: '2022-05-05 16:46:00',
          invalid_at: '2022-06-11 00:00:00',
          price: 100,
          require_price: 0,
          discount_way: 1,
          discount_percent: 0,
          discount_limit_price: 0,
          can_use_with_activity: 1,
          bind_res_count: 0,
          cu_id: 'cu_6275d2c3db90e_4MtqnjrL',
          receive_at: '2022-05-07 10:00:35',
          invalid_text: '',
          valid_type: 'valid',
          has_detail: 0,
          is_support_superposition: 1,
          discount_price: 100,
          preferential_price: 100
        },
        coupon: {
          valid: [
            {
              id: 'cou_62738ef4e04d6-hPGs5q',
              title: 'hd券后价test1',
              type: 1,
              instructions: '77777777777777',
              valid_at: '2022-05-05 16:46:00',
              invalid_at: '2022-06-11 00:00:00',
              price: 100,
              require_price: 0,
              discount_way: 1,
              discount_percent: 0,
              discount_limit_price: 0,
              can_use_with_activity: 1,
              bind_res_count: 0,
              cu_id: 'cu_6275d2c3db90e_4MtqnjrL',
              receive_at: '2022-05-07 10:00:35',
              invalid_text: '',
              valid_type: 'valid',
              has_detail: 0,
              is_support_superposition: 1,
              discount_price: 100
            },
            {
              id: 'gmh_62738ef4e04d6-hPGs5q',
              title: 'hd券后价test2',
              type: 2,
              instructions: '8888888888888888',
              valid_at: '2022-05-05 16:46:00',
              invalid_at: '2022-06-11 00:00:00',
              price: 200,
              require_price: 0,
              discount_way: 1,
              discount_percent: 0,
              discount_limit_price: 0,
              can_use_with_activity: 1,
              bind_res_count: 0,
              cu_id: 'cu_6275d2c3db90e_4Mtqnjrg',
              receive_at: '2022-05-07 10:00:35',
              invalid_text: '',
              valid_type: 'valid',
              has_detail: 0,
              is_support_superposition: 1,
              discount_price: 100
            },
            {
              id: 'gmh_62738ef4e04d6-hPGs5q',
              title: 'hd券后价test2',
              type: 2,
              instructions: '8888888888888888',
              valid_at: '2022-05-05 16:46:00',
              invalid_at: '2022-06-11 00:00:00',
              price: 200,
              require_price: 0,
              discount_way: 1,
              discount_percent: 0,
              discount_limit_price: 0,
              can_use_with_activity: 1,
              bind_res_count: 0,
              cu_id: 'cu_6275d2c3db90e_4Mtqnjrg',
              receive_at: '2022-05-07 10:00:35',
              invalid_text: '',
              valid_type: 'valid',
              has_detail: 0,
              is_support_superposition: 1,
              discount_price: 100
            },
            {
              id: 'gmh_62738ef4e04d6-hPGs5q',
              title: 'hd券后价test2',
              type: 2,
              instructions: '8888888888888888',
              valid_at: '2022-05-05 16:46:00',
              invalid_at: '2022-06-11 00:00:00',
              price: 200,
              require_price: 0,
              discount_way: 1,
              discount_percent: 0,
              discount_limit_price: 0,
              can_use_with_activity: 1,
              bind_res_count: 0,
              cu_id: 'cu_6275d2c3db90e_4Mtqnjrg',
              receive_at: '2022-05-07 10:00:35',
              invalid_text: '',
              valid_type: 'valid',
              has_detail: 0,
              is_support_superposition: 1,
              discount_price: 100
            },
            {
              id: 'gmh_62738ef4e04d6-hPGs5q',
              title: 'hd券后价test2',
              type: 2,
              instructions: '8888888888888888',
              valid_at: '2022-05-05 16:46:00',
              invalid_at: '2022-06-11 00:00:00',
              price: 200,
              require_price: 0,
              discount_way: 1,
              discount_percent: 0,
              discount_limit_price: 0,
              can_use_with_activity: 1,
              bind_res_count: 0,
              cu_id: 'cu_6275d2c3db90e_4Mtqnjrg',
              receive_at: '2022-05-07 10:00:35',
              invalid_text: '',
              valid_type: 'valid',
              has_detail: 0,
              is_support_superposition: 1,
              discount_price: 100
            }
          ],
          invalid: [],
          recommend: {
            list: [
              {
                id: 'cou_62738ef4e04d6-hPGs5q',
                title: 'hd券后价test1',
                type: 1,
                instructions: '77777777777777',
                valid_at: '2022-05-05 16:46:00',
                invalid_at: '2022-06-11 00:00:00',
                price: 100,
                require_price: 0,
                discount_way: 1,
                discount_percent: 0,
                discount_limit_price: 0,
                can_use_with_activity: 1,
                bind_res_count: 0,
                cu_id: 'cu_6275d2c3db90e_4MtqnjrL',
                receive_at: '2022-05-07 10:00:35',
                invalid_text: '',
                valid_type: 'valid',
                has_detail: 0,
                is_support_superposition: 1,
                discount_price: 100,
                preferential_price: 100
              }
            ],
            total: 100
          },
          choose_use_coupon: {
            list: [
              {
                id: 'cou_62738ef4e04d6-hPGs5q',
                title: 'hd券后价test1',
                type: 1,
                instructions: '77777777777777',
                valid_at: '2022-05-05 16:46:00',
                invalid_at: '2022-06-11 00:00:00',
                price: 100,
                require_price: 0,
                discount_way: 1,
                discount_percent: 0,
                discount_limit_price: 0,
                can_use_with_activity: 1,
                bind_res_count: 0,
                cu_id: 'cu_6275d2c3db90e_4MtqnjrL',
                receive_at: '2022-05-07 10:00:35',
                invalid_text: '',
                valid_type: 'valid',
                has_detail: 0,
                is_support_superposition: 1,
                discount_price: 100,
                preferential_price: 100
              }
            ],
            total: 100
          }
        },
        promo_code: '',
        promo_code_info: {
          can_use_promo_code: false,
          discount_id: '',
          batch_id: '',
          discount_type: 11,
          invalid_text: '',
          discount_price: 0
        },
        group_work: {
          team_leader_price: 0
        },
        coupon_hide: false,
        discount_price: 100,
        goods_price: 5555550
      }
    }
  },
  components: {
    CouponShow: () => import('@xiaoe/xiaoe-marketing-module/lib/CouponOrder')
  },
  computed: {
    JX () {
      return window.navigator.userAgent
    },
    uA () {
      return window.navigator.userAgent.indexOf('iPhone') !== -1
    },
    uS () {
      return window.navigator.userAgent.indexOf('miniProgram') !== -1
    },
    SS () {
      return window.screen.height
    },
    H () {
      return window.wx.getSystemInfoSync().windowHeight
    },
    W () {
      return window.wx.getSystemInfoSync().windowWidth
    }
    
  },
  directives: {
    fixIPhone: {
      bind (el, binding) {
        console.log('window', window)
        console.log('当前设备', window.navigator.userAgent)
        if (window.navigator.userAgent.indexOf('miniProgram') !== -1) {
          console.log('进来了')
          const style = binding.value || {}
          Object.keys(style).forEach((key) => {
            el.style[key] = style[key]
          })
        }
      }
    }
  }
}
</script>

<style>
html{
  font-size: 52px;
}
.couponNewV2{
  font-size: 20px;
}
.grid_container {
  display: grid;
}
.grid-item {
  display: inline-grid;
}
.grid-container {
  width: 100%;
  /* position: fixed;
  bottom: 0;
  left: 0; */
  background: red;
  /* height: 12.92rem; */
}
.g2{
  width: 100%;
  background: black;
  height: 1rem;
}
</style>
