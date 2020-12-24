<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="Home" href="/tabs/Home">
          <ion-icon :icon="home" />
          <ion-label>หน้าหลัก</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="Product" href="/tabs/Product">
          <ion-icon :icon="car" />
          <ion-label>Product</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="Customer" href="/tabs/Customer">
          <ion-icon :icon="person" />
          <ion-label>ลูกค้า</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="About" href="/tabs/About">
          <ion-icon :icon="bulb" />
          <ion-label>เกี่ยวกับ</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { ellipse, square, triangle, person, home, car, airplane,body,bulb
 } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      ellipse, 
      square, 
      triangle,
      person,
      home,
      car,
      airplane,
      body,
      bulb


    }
  }
}
</script>