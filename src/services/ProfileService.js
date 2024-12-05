import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { Account } from "@/models/Account.js"


class ProfileService {
    async getProfileById(profileId) {
        AppState.activeProfile = null
        const response = await api.get(`api/profiles/${profileId}`)
        logger.log('Got Profile 🖼️', response.data)
        const profile = new Account(response.data)
        AppState.activeProfile = profile
    }

}
export const profileService = new ProfileService()