<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>เกี่ยวกับเรา</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">เกี่ยวกับเรา</ion-title>
        </ion-toolbar>
      </ion-header>

      <!-- <ExploreContainer name="เกี่ยวกับเรา" /> -->
      <ion-text color="primary">เกี่ยวกับเรา</ion-text>

      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-button @click="presentAlert" shape="block"
              >Show Alert</ion-button
            >
          </ion-col>

          <ion-col>
            <ion-button
              @click="presentAlertConfirm"
              color="success"
              shape="block"
              >Show Confirm</ion-button
            >
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col class="center_item">
            <ion-button @click="inputAlert" color="danger" shape="round"
              >Show Alert (checkbox)</ion-button
            >
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col>
            <ion-list>
              <ion-item>
                <ion-checkbox color="primary"></ion-checkbox>
                <ion-label class="margin_left">A</ion-label>
              </ion-item>
              <ion-item>
                <ion-checkbox color="secondary"></ion-checkbox>
                <ion-label class="margin_left"> B </ion-label>
              </ion-item>
              <ion-item>
                <ion-checkbox color="danger"></ion-checkbox>
                <ion-label class="margin_left"> C </ion-label>
              </ion-item>
              <ion-item>
                <ion-checkbox color="light"></ion-checkbox>
                <ion-label class="margin_left"> D </ion-label>
              </ion-item>
              <ion-item>
                <ion-checkbox color="dark"></ion-checkbox>
                <ion-label class="margin_left"> E </ion-label>
              </ion-item>
            </ion-list>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col>
            <ion-list>
              <ion-item v-for="data in datas" :key="data._id">
                <ion-text>{{ data.name }}</ion-text>
              </ion-item>
            </ion-list>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  alertController,
} from "@ionic/vue";
// import ExploreContainer from '@/components/ExploreContainer.vue';

export default {
  name: "About",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonButton,
  },

  setup() {
    const datas = [
      {
        _id: 1,
        name: "Phuminan Wimano",
        age: "21",
      },
      {
        _id: 2,
        name: " john Sbow",
        age: "25",
      },
      {
        _id: 3,
        name: " john Snow",
        age: "21",
      },
      {
        _id: 4,
        name: " john Bol",
        age: "23",
      },
      {
        _id: 5,
        name: " john Lower",
        age: "22",
      },
    ];
    return { datas };
  },

  methods: {
    async inputAlert() {
      const alert = await alertController.create({
        header: "กรอกข้อมูล",
        inputs: [
          {
            name: "fullname",
            placeholder: "กรอกชื่อ-นามสกุล",
          },
          {
            name: "tel",
            placeholder: "กรอกเบอร์มิอถือ",
            type: "number",
          },
          {
            name: "birthday",
            placeholder: "ระบุ DD/MM/YYYY",
            type: "date",
          },
        ],
        buttons: [
          {
            text: "ยกเลิก",
            role: "cancel",
            cssClass: "secondary",
            handler: () => {
              console.log("Confirm Cancel:");
            },
          },
          {
            text: "ตกลง",
            handler: (value) => {
              console.log("value.fullname");
              console.log("value.tel");
              console.log("value.brithday");
            },
          },
        ],
      });
      return alert.present();
    },

    async presentAlert() {
      //  console.log("Test Click !!");
      const alert = await alertController.create({
        // cssClass: 'my-custom-class',
        header: "คำเตือน",
        // subHeader: 'ข้อมูลไม่ครบถ้วน',
        message: "กรุณากรอกข้อมูลให้ครบถ้วน",
        buttons: ["ตกลง"],
      });
      return alert.present();
    }, //Confirm
    async presentAlertConfirm() {
      const alert = await alertController.create({
        // cssClass: 'my-custom-class',
        header: "แจ้งเตือน",
        message: "ยืนยันการสั่งซื้อ<strong>ถูกต้อง</strong>!!!",
        buttons: [
          {
            text: "ยกเลิก",
            role: "cancel",
            cssClass: "secondary",
            handler: () => {
              console.log("Confirm Cancel:");
            },
          },
          {
            text: "ตกลง",
            handler: () => {
              console.log("Confirm Okay");
            },
          },
        ],
      });
      return alert.present();
    },
  },
};
</script>

<style scoped>
.center_item {
  display: flex;
  justify-content: center;
}

.margin_left {
  margin-left: 20px;
}
</style>