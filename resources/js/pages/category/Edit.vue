<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h5>Update Category</h5>
                    <router-link :to="{name: 'category-list'}" class="btn btn-primary">Category List</router-link>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-8 offset-2">
                            <form @submit.prevent="updateCategory" class="m-2 p-3 border border-primary">
                                <div class="mb-3">
                                    <label for="" class="form-label">Category Name</label>
                                    <input type="text" id="" class="form-control" name="category_name" v-model="form.category_name">

                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Category Description</label>
                                    <textarea class="form-control" v-model="form.category_description" name="category_description" rows="2">{{ form.category_description}}</textarea>

                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" v-model="form.publication_status" type="radio" name="publication_status" value="1">
                                    <label class="form-check-label">
                                        Published
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" v-model="form.publication_status" type="radio" name="publication_status" value="0">
                                    <label class="form-check-label">
                                        Unpublished
                                    </label>
                                </div>
                                <div class="mb-3">
                                    <button type="submit" class="btn btn-success" value="Update Category">Update Category</button>
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
import axios from "axios";
import Form from "vform";
import Swal from 'sweetalert2';
export default {
    name: "Edit",
    data: () => ({
        form: new Form({
            category_name: '',
            category_description: '',
            publication_status: ''
        })
    }),
    methods: {
        editCategory(){
            let id = this.$route.params.id;
            axios.get(`/api/category/${id}/edit`)
                .then(res => {
                    let category = res.data
                        this.form.category_name = category.category_name;
                        this.form.category_description = category.category_description;
                        this.form.publication_status = category.publication_status;
            })
        },
        async updateCategory () {
            let id = this.$route.params.id;
            const response = await this.form.put(`/api/category/${id}`)
                .then((response)=>{
                    console.log(response.data);
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Category Updated Successfully',
                        showConfirmButton: false,
                        timer: 2000
                    })
                })
                .catch(error=>{
                    console.log(error)
                })
        }
    },
    mounted() {
        this.editCategory()
    }
}
</script>

<style scoped>

</style>
