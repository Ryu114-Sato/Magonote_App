<template>
    <div class="register-container">
      <h2>新規ユーザー登録</h2>
      <form @submit.prevent="registerUser">
        <!-- ログインID入力 (5文字以内、重複チェック付き) -->
        <label for="loginId">ログインID (5文字以内)</label>
        <input
        id="loginId"
        v-model="loginId"
        maxlength="5"
        required
        />
        <p v-if="loginIdError" class="error">{{ loginIdError }}</p>

        <!-- ログインPW入力 (8文字以上) -->
        <label for="password">パスワード (8文字以上)</label>
        <input
        id="password"
        type="password"
        v-model="password"
        required
        />
        <p v-if="passwordError" class="error">{{ passwordError }}</p>

        <!-- 氏名入力 (姓と名) -->
        <label for="firstName">姓</label>
        <input id="firstName" v-model="firstName" required />

        <label for="lastName">名</label>
        <input id="lastName" v-model="lastName" required />

        <button type="submit">登録</button>
    </form>
    </div>
</template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  import { useStore } from 'vuex';
  import localStorageCmp from '@/composable/localStorageCmp';
  
  // Vuexストアの利用
  const store = useStore();
  const { getUsers, saveUsers } = localStorageCmp('users');
  
  // 入力用のリアクティブ変数
  const loginId = ref('');
  const password = ref('');
  const firstName = ref('');
  const lastName = ref('');
  const loginIdError = ref('');
  const passwordError = ref('');
  
  // ユーザーIDの重複チェック
  function isDuplicateLoginId(id: string): boolean {
    const usersFromStore = store.state.users as any[];
    const usersFromLocal = getUsers() as any[];
    return (
      usersFromStore.some(user => user.loginId === id) ||
      usersFromLocal.some(user => user.loginId === id)
    );
  }
  
  // 登録処理
  function registerUser() {
    loginIdError.value = '';
    passwordError.value = '';
  
    if (loginId.value.length > 5) {
      loginIdError.value = 'ログインIDは5文字以内です';
      return;
    }
    if (isDuplicateLoginId(loginId.value)) {
      loginIdError.value = 'このログインIDは既に使用されています';
      return;
    }
    if (password.value.length < 8) {
      passwordError.value = 'パスワードは8文字以上にしてください';
      return;
    }
    
    // 新規ユーザー作成
    const newUser = {
      loginId: loginId.value,
      password: password.value,
      firstName: firstName.value,
      lastName: lastName.value
    };
    
    // ストアにユーザーを追加
    store.commit('addUser', newUser);
    
    // localStorage にも保存
    saveUsers(store.state.users);
    
    alert('新規登録が完了しました');
  
    // 入力値をクリア
    loginId.value = '';
    password.value = '';
    firstName.value = '';
    lastName.value = '';
  }
  </script>
  
  <style scoped>
  .register-container {
    width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  button {
    width: 100%;
    padding: 10px;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: darkblue;
  }
  .error {
    color: red;
    font-size: 12px;
  }
  </style>
  