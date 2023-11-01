import Swal from 'sweetalert2'

export const alerts = Swal.mixin({
  customClass: {
    confirmButton: 'bg-white px-6 py-2 rounded text-black',
    cancelButton: 'cancel-button'
  },
  buttonsStyling: false,
  background: '#008996',
  color: 'rgba(209, 213, 219, 1)'
})
