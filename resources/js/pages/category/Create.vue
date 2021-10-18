<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h5>Create Category</h5>
                    <router-link :to="{name: 'category-list'}" class="btn btn-primary">Category List</router-link>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-8 offset-2">
                            <form @submit.prevent="addCategory" class="m-2 p-3 border border-primary">
                                <div class="mb-3">
                                    <label for="" class="form-label">Category Name</label>
                                    <input type="text" id="" class="form-control" v-model="form.category_name" name="category_name">
                                    <div class="text-danger" v-if="form.errors.has('category_name')" v-html="form.errors.get('category_name')" />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Category Description</label>
                                    <textarea class="form-control" v-model="form.category_description" name="category_description" rows="2"></textarea>
                                    <div class="text-dangerf" v-if="form.errors.has('category_description')" v-html="form.errors.get('category_description')" />
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" checked type="radio" v-model="form.publication_status" name="publication_status" id="flexRadioDefault1" value="1">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        Published
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" v-model="form.publication_status" name="publication_status" id="flexRadioDefault2" value="0">
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        Unpublished
                                    </label>
                                </div>
                                <div class="mb-3">
                                    <button type="submit" class="btn btn-success">Create Category</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Form from "vform";
import Swal from 'sweetalert2'
//import axios from 'axios'
export default {
    name: "Create",
    data: () => ({
        form: new Form({
            category_name: '',
            category_description: '',
            publication_status: ''
        })
    }),
    methods: {
        async addCategory () {
            const response = await this.form.post('/api/category')
                .then(()=>{
                    this.form.category_name = ''
                    this.form.category_description = ''
                    this.form.publication_status = ''
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Category Created Successfully',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    this.$router.push('/category');
                })
            .catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>

<style scoped>

</style>
