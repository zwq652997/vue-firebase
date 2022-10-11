<template>
  <div class="hello"></div>
</template>

<script>
import { db } from '../firebase.js';
import {
  collection,
  getDocs,
  doc,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  async created() {
    const q = query(collection(db, 'listing'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      // 可以监听哪些是更改，哪些是删除，哪些是新增
      // querySnapshot.docChanges().forEach((change) => {
      //   if (change.type === 'added') {
      //     console.log('New city: ', change.doc.data());
      //   }
      //   if (change.type === 'modified') {
      //     console.log('Modified city: ', change.doc.data());
      //   }
      //   if (change.type === 'removed') {
      //     console.log('Removed city: ', change.doc.data());
      //   }
      // });
      // 数据只要更新就触发
      // querySnapshot.forEach((doc) => {
      //   console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
      // });
    });

    const querySnapshot = await getDocs(collection(db, 'listing'));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });

    // const unsub = onSnapshot(
    //   doc(db, 'listing', '7OzB3G8B0IsJot2uzgNz'),
    //   (doc) => {
    //     console.log('Current data: ', doc.data());
    //   }
    // );

    const qt = query(collection(db, 'trades'));
    const unsubscribet = onSnapshot(qt, (querySnapshot) => {
      // 数据只要更新就触发
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
      });
    });

    // 查询count
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
