<script setup>
import { AppState } from '@/AppState';
import { accountService } from '@/services/AccountService';
import { logger } from '@/utils/Logger';
import Pop from '@/utils/Pop';
import { computed, onMounted, ref } from 'vue';

const account = computed(() => AppState.account)
onMounted(() => editableAccountData.value = { ...account.value })

const editableAccountData = ref({
    name: '',
    picture: '',
    bio: '',
    coverImg: '',
    resume: '',
    graduated: false
})

async function updateAccount() {
    try {
        await accountService.updateAccount(editableAccountData.value)
    }
    catch (error) {
        Pop.meow(error);
        logger.error('[Updating Account]', error)
    }
}

</script>

<template>
    <div class="modal" tabindex="-1" id="AccountModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form @submit.prevent="updateAccount()">
                    <div class="modal-body">
                        <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input type="Text" class="form-control" id="name">
                        </div>
                        <div class="mb-3">
                            <label for="picture" class="form-label">Picture</label>
                            <input type="url" class="form-control" id="picture">
                        </div>
                        <div class="mb-3">
                            <label for="bio" class="form-label">Bio</label>
                            <input type="text" class="form-control" id="bio">
                        </div>
                        <div class="mb-3">
                            <label for="coverImg" class="form-label">Cover Img</label>
                            <input type="url" class="form-control" id="coverImg">
                        </div>
                        <div class="mb-3">
                            <label for="resume" class="form-label">Resume</label>
                            <input type="text" class="form-control" id="resume">
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="graduated">
                            <label class="form-check-label" for="graduated">Graduated</label>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary">Save changes</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>