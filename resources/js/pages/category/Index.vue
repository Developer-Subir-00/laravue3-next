<template>
    <div class="row">
        <div class="col-sm-12">
            <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center bg-info">
                    <h5 class="mb-0">Product Category</h5>
                    <router-link :to="{name: 'create-category'}" class="btn btn-success">Create Category</router-link>
                </div>
                <div class="card-body">
                    <table class="table table-bordered table-striped">
                        <thead>
                            <tr class="text-center bg-primary text-light">
                                <th>Id</th>
                                <th>Name</th>
                                <th>Category Description</th>
                                <th>Publication Status</th>
                                <th style="width: 160px">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="text-center" v-for="category in categories" :key="category">
                                <td>{{ category.id }}</td>
                                <td>{{ category.category_name }}</td>
                                <td>{{ category.category_description }}</td>
                                <td>{{ category.publication_status === 1 ? 'Published' : 'Unpublished' }}</td>
                                <td style="width: 160px">
                                    <a @click.prevent="unPublished(category.id)" class="btn btn-outline-primary btn-sm text-info me-4" v-if="category.publication_status === 1"><i class="fas fa-arrow-up"></i></a>
                                    <a @click.prevent="published(category.id)" class="btn btn-outline-primary btn-sm text-warning me-4" v-else-if="category.publication_status === 0"><i class="fas fa-arrow-down"></i></a>
                                    <router-link :to="{name: 'edit-category', params: {id: category.id}}" class="btn btn-outline-primary btn-sm text-success me-2"><i class="fas fa-edit"></i></router-link>
                                    <a @click.prevent="deleteCategory(category.id)" class="btn btn-outline-primary btn-sm text-danger m-2"><i class="fas fa-trash-alt"></i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Swal from "sweetalert2";
export default {
    name: "Index",
    data(){
        return {
            categories: ''
        }
    },
    methods: {
        loadCategory(){
            axios.get(`/api/category`).then(res=>{
                this.categories = res.data
            })
        },
        async deleteCategory (id) {
            await axios.delete(`/api/category/${id}`)
                .then(()=>{
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Category Deleted Successfully',
                        showConfirmButton: false,
                        timer: 2000
                    })
                })
                .catch(error=>{
                    console.log(error)
                })
        },
        async published (id) {
            await axios.get(`/api/published/${id}`)
                .then(()=>{
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Category Published Successfully',
                        showConfirmButton: false,
                        timer: 2000
                    })
                })
                .catch(error=>{
                    console.log(error)
                })
        },
        async unPublished (id) {
            await axios.get(`/api/unpublished/${id}`)
                .then(()=>{
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Category Unpublished Successfully',
                        showConfirmButton: false,
                        timer: 2000
                    })
                })
                .catch(error=>{
                    console.log(error)
                })
        }
    },
    mounted(){
        this.loadCategory()
    }
}
</script>

<style scoped>

</style>
